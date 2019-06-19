using AutoMapper;
using CoreWebAPI.Helpers;
using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CoreWebAPI.Controllers
{
    [EnableCors]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private ILogger _logger;
        private IUserService _userService;
        private IMapper _mapper;
        private IConfiguration _configuration;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UsersController(
            IMapper mapper,
            ILogger<VideosController> logger,
            IUserService userv,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration)
        {
            _logger = logger;
            _userService = userv;
            _mapper = mapper;
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserModel loginUserModel)
        {
            if (ModelState.IsValid)
            {
                var resault = await _signInManager.PasswordSignInAsync(loginUserModel.UserName, loginUserModel.Password, false, false);

                if (!resault.Succeeded)
                {
                    return BadRequest();
                }

                var user = await _userManager.FindByNameAsync(loginUserModel.UserName);

                return Ok(GetToken(user));
            }

            return BadRequest(ModelState);
        }

        private string GetToken(IdentityUser user)
        {
            var utcNow = DateTime.UtcNow;

            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, utcNow.ToString())
            };

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("Tokens:Key")));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            var jwt = new JwtSecurityToken(
                signingCredentials: signingCredentials,
                claims: claims,
                notBefore: utcNow,
                expires: DateTime.UtcNow.AddSeconds(120)
                );

            return new JwtSecurityTokenHandler().WriteToken(jwt);

        }

        [Authorize]
        [HttpPost]
        [Route("refreshtoken")]
        public async Task<IActionResult> RefreshToken()
        {
            var user = await _userManager.FindByNameAsync(
                User.Identity.Name ??
                User.Claims.Where(c => c.Properties.ContainsKey("unique_name")).Select(c => c.Value).FirstOrDefault()
                );
            return Ok(GetToken(user));

        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody]RegisterUserModel regModel)
        {
            if (ModelState.IsValid)
            {
                User user = _mapper.Map<User>(regModel);
                var resault = await _userManager.CreateAsync(user, regModel.Password);

                if (resault.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    return Ok(GetToken(user));
                }
                else
                {
                    return BadRequest(resault.Errors);
                }


            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        [Route("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userService.GetById(id);
            var userDto = _mapper.Map<User>(user);
            return Ok(userDto);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] User userDto)
        {
            // map dto to entity and set id
            var user = _mapper.Map<User>(userDto);
            user.Id = id;

            try
            {
                // save 
                //_userService.Update(user, userDto.Password);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok();
        }
    }
}