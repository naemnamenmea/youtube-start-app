using AutoMapper;
using CoreWebAPI.Models;
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
using System;
using System.Linq;

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
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UsersController(
            IMapper mapper,
            ILogger<VideosController> logger,
            IUserService userv,
            UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
            _logger = logger;
            _userService = userv;
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserAuth user)
        {
            var resault = await _signInManager.PasswordSignInAsync(user.UserName, user.Password, user.RememberMe, false);

            if(resault.Succeeded)
            {
                return Ok();
            }
            return BadRequest("Неправильный логин и (или) пароль");
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody]UserReg regModel)
        {
            User user = new User
            {
                UserName = regModel.UserName
            };

            try
            {
                var resault = await _userManager.CreateAsync(user, regModel.Password);

                if (resault.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    return Ok();
                }
                else
                {
                    return BadRequest(resault.Errors);
                }
            }
            catch (Exception e)
            {
                _logger.LogError("&&&&&&&&&&&&&&&&&&" + e);
            }

            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Route("logoff")]
        public async Task<IActionResult> LogOff()
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