using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Runtime.Serialization.Json;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using AutoMapper;

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
        private NoEmbedService noembedService;

        public VideosController(VideoService context)
        {
            _context = context;

            if (_context.VideoItems.Count() == 0)
            {
                _context.VideoItems.Add(new Video
                {
                    id = "l58dipKGTJE",
                    title = "animal",
                    posted_date = new DateTime(),
                    grade = 0.3f
                });
                _context.VideoItems.Add(new Video
                {
                    id = "LEHny_pGtL0",
                    title = "pain",
                    posted_date = new DateTime(),
                    grade = 0.7f
                });
                _context.SaveChanges();
            }
        }

        // GET: api/Videos
        [HttpGet]
        public IEnumerable<Video> Get()
        {
            return _context.VideoItems;
        }
        //public async Task<ActionResult<IEnumerable<Video>>> Get()
        //{            
        //    Debug.WriteLine("It works!!!");
        //    return await _context.VideoItems.ToListAsync();
        //}

        // GET api/Videos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Video>> Get(long id)
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
        public async Task<ActionResult<Video>> Post(string videoId)
        {
            Video video = Mapper.Map<Video>(await noembedService.GetYouTubeVideoJSON(videoId));
            _context.VideoItems.Add(video);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = video.id }, video);
        }

        // PUT api/Videos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(string id, Video item)
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
        public async Task<IActionResult> Delete(long id)
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
