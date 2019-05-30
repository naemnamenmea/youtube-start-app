using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreWebAPI.Controllers
{
    [Produces("application/json")]
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : Controller
    {
        private readonly VideoService _context;
        private readonly ILogger _logger;
        private NoEmbedService noembedService;

        private string CreateLogMsg(ref string msg)
        {
            DateTime current_time = DateTime.Now;
            return ":::::(" + current_time + "):::::> \"" + msg + "\"";
        }

        public VideosController(VideoService context,
            ILogger<VideosController> logger, NoEmbedService noembed)
        {
            _context = context;
            noembedService = noembed;
            _logger = logger;
        }

        // GET: api/Videos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> Get()
        {
            return await _context.VideoItems.ToListAsync();
        }

        // GET api/Videos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Video>> Get([FromRoute] string id)
        {
            var videoItem = await _context.VideoItems.FindAsync(id);

            if (videoItem == null)
            {
                return NotFound();
            }

            return videoItem;
        }

        // POST api/Videos
        [HttpPost]
        public async Task<ActionResult<Video>> Post(string videoId) //async Task<ActionResult<
        {
            //_logger.LogInformation(CreateLogMsg(ref videoId));

            //Video video = Mapper.Map<Video>(noembedService.GetYouTubeVideoJSON(videoId));

            var item = await _context.VideoItems.FindAsync(videoId);
            if (item != null)
                return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status409Conflict);

            var data = await noembedService.GetYouTubeVideoJSON(videoId);
            if(data.ContainsKey("error"))
            {
                return NotFound();
            }
            Video video = new Video
            {
                id = videoId,
                title = data["title"].ToString(),
                thumbnail = data["thumbnail_url"].ToString()
            };

            _context.VideoItems.Add(video);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(Get), new { id = video.id }, video);
        }


        //[HttpPost]
        //public void Post(string videoId)
        //{

        //    _logger.LogInformation(CreateLogMsg(ref videoId));

        //    WebRequest request = WebRequest.Create("https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + videoId);

        //    request.Credentials = CredentialCache.DefaultCredentials;
        //    WebResponse response = request.GetResponse();
            
        //    using (Stream dataStream = response.GetResponseStream())
        //    {
        //        StreamReader reader = new StreamReader(dataStream);
        //        string responseFromServer = reader.ReadToEnd();
        //        dynamic json = JsonConvert.DeserializeObject(responseFromServer);
        //        Video video = new Video();
        //        video.title = responseFromServer + (videoId == "" ? "BAD" : "GOOD {" + videoId + "}");
        //        video.id = videoId;
        //        video.thumbnail = json.thumbnail_url;
        //        video.posted_date = new DateTime();
        //        _context.VideoItems.Add(video);
        //        _context.SaveChanges();
        //    }
        //    response.Close();
        //    //return CreatedAtAction(nameof(Get), new { id = video.id }, video);
        //}

        // PUT api/Videos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem([FromRoute] string id, [FromBody] Video item)
        {
            if (id != item.id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/Videos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] string id)
        {
            var video = await _context.VideoItems.FindAsync(id);

            if (video == null)
            {
                return NotFound();
            }

            _context.VideoItems.Remove(video);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
