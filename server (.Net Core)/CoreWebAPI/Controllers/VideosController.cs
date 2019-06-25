using AutoMapper;
using CoreWebAPI.Helpers;
using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreWebAPI.Controllers
{
    [Produces("application/json")]
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : Controller
    {
        private readonly ILogger _logger;
        private readonly IMapper _mapper;
        private NoEmbedService noembedService;
        private readonly IVideoService _videoService;
        private readonly IUserService _userService;
        private readonly AppSettings _settings;

        private string CreateLogMsg(string msg)
        {
            DateTime current_time = DateTime.Now;
            return ":::::(" + current_time + "):::::> \"" + msg + "\"";
        }

        public VideosController(
            DataContext context,
            IVideoService vserv,
            IUserService userv,
            ILogger<VideosController> logger,
            NoEmbedService noembed,
            IMapper mapper,
            IOptions<AppSettings> settings)
        {
            noembedService = noembed;
            _logger = logger;
            _userService = userv;
            _mapper = mapper;
            _videoService = vserv;
            _settings = settings.Value;
        }

        [Route("[action]/{id}")]
        [HttpGet]
        public async Task<ActionResult<string>> GetTitle([FromRoute] string id)
        {
            var data = await noembedService.GetYouTubeVideoJSON(id);

            if (data.ContainsKey("error"))
                return NoContent();

            return data["title"].ToString();
        }

        [Route("[action]/{num}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> Top([FromRoute] int num)
        {
            return await _videoService.GetTopVideosAsync(num);
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> Latest()
        {
            return await _videoService.GetLatestVideosAsync();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> Get()
        {           
            return await _videoService.GetVideosAsync();
        }

        [Authorize]
        [HttpGet("info")]
        public async Task<ActionResult<IEnumerable<UserRelatedVideoInfo>>> GetWithInfo()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            return await _videoService.GetUserRelatedVideoInfoAsync(int.Parse(userId));
        }

        // GET api/Videos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Video>> Get([FromRoute] int id)
        {
            var videoItem = await _videoService.FindVideoAsync(id);

            if (videoItem == null)
            {
                return NotFound();
            }

            return Ok(videoItem);
        }

        [Authorize]
        [HttpGet("vote")]
        public async Task<JsonResult> Vote([FromQuery]int id, [FromQuery]float vote)
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            return Json(_videoService.Vote(int.Parse(userId), id, vote));
        }

        // POST api/Videos
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Video>> Post([FromBody] Video newVideo) //async Task<ActionResult<
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Video video = await _videoService.FindVideoAsync(newVideo.VideoId);
            if (video != null)
                return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status409Conflict,
                    new { message = "Видео \"" + video.Title + "\" уже существует" });

            _videoService.AddVideoAsync(newVideo);
            await _videoService.SaveChangesAsync();

            //return CreatedAtAction(nameof(Get), new { id = newVideo.id }, newVideo);
            return Ok("Видео успешно добавлено");
        }


        //[HttpPost]
        //public void Post(string videoId)
        //{
        //    WebRequest request = WebRequest.Create("https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + videoId);

        //    request.Credentials = CredentialCache.DefaultCredentials;
        //    WebResponse response = request.GetResponse();

        //    using (Stream dataStream = response.GetResponseStream())
        //    {
        //        StreamReader reader = new StreamReader(dataStream);
        //        string responseFromServer = reader.ReadToEnd();
        //        dynamic json = JsonConvert.DeserializeObject(responseFromServer);
        //        video.thumbnail = json.thumbnail_url;
        //    }
        //    response.Close();
        // return CreatedAtAction(nameof(Get), new { id = video.id }, video);
        //}

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] string id, [FromBody] Video video)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != video.VideoId)
            {
                return BadRequest();
            }

            _videoService.ChangeVideoState(video, EntityState.Modified);
            await _videoService.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/Videos/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var video = await _videoService.FindVideoAsync(id);

            if (video == null)
            {
                return NotFound();
            }

            _videoService.Remove(video);
            await _videoService.SaveChangesAsync();

            return Ok("Видео успешно удалено");
        }
    }
}
