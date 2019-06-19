using AutoMapper;
using CoreWebAPI.Entities;
using CoreWebAPI.Helpers;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace CoreWebAPI.Controllers
{
    [EnableCors]
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private ILogger _logger;
        private IUserService _userService;
        private IMapper _mapper;
        private readonly UserManager<ApplicationUser> _userManager;

        public UsersController(
            IMapper mapper,
            ILogger<VideosController> logger,
            IUserService userv,
            UserManager<ApplicationUser> userManager)
        {
            _logger = logger;
            _userService = userv;
            _mapper = mapper;
            _userManager = userManager;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] ApplicationUser userDto)
        {
            //var user = _userService.Authenticate(userDto.Username, userDto.Password);
            //if (user == null)
            //{
            //    return BadRequest(new { message = "Неверное имя пользователя или пароль" });
            //}
            return null;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(string email, string password, string confirmPassword)
        {
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
            {
                return BadRequest("email or password is null");
            }

            if (password != confirmPassword)
            {
                return BadRequest("Passwords don't match!");
            }

            var newUser = new ApplicationUser
            {
                UserName = email
            };

            IdentityResult userCreationResult = null;
            try
            {
                userCreationResult = await _userManager.CreateAsync(newUser, password);
            }
            catch (SqlException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e);
            }

            if (!userCreationResult.Succeeded)
            {
                return BadRequest(userCreationResult.Errors);
            }

            return Ok("Registration completed");
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userService.GetById(id);
            var userDto = _mapper.Map<ApplicationUser>(user);
            return Ok(userDto);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] ApplicationUser userDto)
        {
            // map dto to entity and set id
            var user = _mapper.Map<ApplicationUser>(userDto);
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