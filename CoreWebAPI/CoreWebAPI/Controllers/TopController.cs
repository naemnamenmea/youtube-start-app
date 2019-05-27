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
    public class TopController : ControllerBase
    {
        private readonly VideoService _context;

        public TopController(VideoService context)
        {
            _context = context;
        }

        // GET: api/Top/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVideo([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var video = await _context.VideoItems.FindAsync(id);

            if (video == null)
            {
                return NotFound();
            }

            return Ok(video);
        }

        private bool VideoExists(string id)
        {
            return _context.VideoItems.Any(e => e.id == id);
        }
    }
}