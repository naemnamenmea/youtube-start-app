using CoreWebAPI.Models;
using CoreWebAPI.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPI.Services
{
    public class VideoService : IVideoService
    {
        private readonly DataContext _context;

        public VideoService(DataContext ctx)
        {
            _context = ctx;
        }

        public void AddVideoAsync(Video video)
        {
            _context.VideoItems.AddAsync(video);
        }

        public void ChangeVideoState(Video video, EntityState modified)
        {
            _context.Entry(video).State = EntityState.Modified;
        }

        public Task<Video> FindVideoAsync(int id)
        {
            return _context.VideoItems.FindAsync(id);
        }

        public Task<Video> FindVideoAsync(string url)
        {
            return _context.VideoItems.FirstOrDefaultAsync(v => v.Url == url);
        }

        public async Task<ActionResult<IEnumerable<Video>>> GetLatestVideosAsync()
        {
            return await _context.VideoItems.OrderByDescending(video => video.Posted_date).ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<Video>>> GetTopVideosAsync(int num)
        {
            return await _context.VideoItems.OrderByDescending(video => video.grade).Take(num).ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<Video>>> GetVideosAsync()
        {
            return await _context.VideoItems.ToListAsync();
        }

        public void Remove(Video video)
        {
            _context.Remove(video);
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }
    }

    public interface IVideoService
    {
        Task<ActionResult<IEnumerable<Video>>> GetTopVideosAsync(int num);
        Task<ActionResult<IEnumerable<Video>>> GetLatestVideosAsync();
        Task<ActionResult<IEnumerable<Video>>> GetVideosAsync();
        Task<Video> FindVideoAsync(int id);
        Task<Video> FindVideoAsync(string url);
        void AddVideoAsync(Video video);
        Task SaveChangesAsync();
        void ChangeVideoState(Video video, EntityState modified);
        void Remove(Video video);
    }
}