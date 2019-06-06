using AutoMapper;
using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly YouTubeAppContext _context;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;
        private NoEmbedContext noembedService;

        private string CreateLogMsg(string msg)
        {
            DateTime current_time = DateTime.Now;
            return ":::::(" + current_time + "):::::> \"" + msg + "\"";
        }

        public VideosController(YouTubeAppContext context,
            ILogger<VideosController> logger, NoEmbedContext noembed, IMapper mapper)
        {
            _context = context;
            noembedService = noembed;
            _logger = logger;
            _mapper = mapper;
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
            return await _context.VideoItems.OrderByDescending(video => video.grade).Take(num).ToListAsync();
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Video>>> Latest()
        {
            return await _context.VideoItems.OrderByDescending(video => video.posted_date).ToListAsync();
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
        public async Task<ActionResult<Video>> Post([FromBody] Video video) //async Task<ActionResult<
        {

            //_logger.LogInformation(CreateLogMsg(ref videoId));

            var item = await _context.VideoItems.FindAsync(video.id);
            if (item != null)
                return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status409Conflict);            

            _context.VideoItems.Add(video);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(Get), new { id = video.id }, video);
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
