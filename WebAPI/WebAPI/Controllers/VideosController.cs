using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    //Response.AppendHeader("Access-Control-Allow-Origin", "*");
    [EnableCors(origins: "http://localhost:4205", headers: "*", methods: "*")]
    public class VideosController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Video
        public IQueryable<video> Getvideo()
        {
            return db.video;
        }

        // GET: api/Video/5
        [ResponseType(typeof(video))]
        public IHttpActionResult Getvideo(string id)
        {
            video video = db.video.Find(id);
            if (video == null)
            {
                return NotFound();
            }

            return Ok(video);
        }

        // PUT: api/Video/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putvideo(string id, video video)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != video.id)
            {
                return BadRequest();
            }

            db.Entry(video).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!videoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Video
        [ResponseType(typeof(video))]
        public IHttpActionResult Postvideo(video video)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.video.Add(video);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (videoExists(video.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = video.id }, video);
        }

        // DELETE: api/Video/5
        [ResponseType(typeof(video))]
        public IHttpActionResult Deletevideo(string id)
        {
            video video = db.video.Find(id);
            if (video == null)
            {
                return NotFound();
            }

            db.video.Remove(video);
            db.SaveChanges();

            return Ok(video);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool videoExists(string id)
        {
            return db.video.Count(e => e.id == id) > 0;
        }
    }
}