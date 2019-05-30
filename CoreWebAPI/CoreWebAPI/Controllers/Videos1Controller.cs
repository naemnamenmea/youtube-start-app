using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreWebAPI.Models;

namespace CoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Videos1Controller : ControllerBase
    {
        private readonly VideoService _context;

        public Videos1Controller(VideoService context)
        {
            _context = context;
        }

        // GET: api/Videos1
        [HttpGet]
        public IEnumerable<Video> GetVideoItems()
        {
            return _context.VideoItems;
        }

        // POST: api/Videos1
        [HttpPost]
        public async Task<IActionResult> PostVideo( string video)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //_context.VideoItems.Add(video);
            await _context.SaveChangesAsync();

            return StatusCode(200);
        }
    }
}