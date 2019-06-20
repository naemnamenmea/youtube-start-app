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
            return await _context.VideoItems.OrderByDescending(video => video.TotalRating).Take(num).ToListAsync();
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

        public RateResponse Vote(int userId, int id, float grade)
        {
            User user = _context.Users.Include(u => u.VideoGrades).FirstOrDefault(u => u.Id == userId);
            Video video = _context.VideoItems.FirstOrDefault(v => v.Id == id);

            if (user == null || video == null)
            {
                return null;
            }

            var _grade = _context.Grades.Find();
            float newRating = 0.0f;
            int newCount = 0;

            if (_grade == null)
            {
                //[-] при добавлении голоса =>
                //1. ++количетсво-проголосовавших
                //2. totalRate += new_vote;
            }
            else
            {
                //[-] при изменении голоса => обновить оценку, т.е
                //1. получить старую оценку пользователя
                //2. получить суммарную оценку и количество голосовавших
                //2. вычесть старую оценку из суммарного рейтинга
                //3. добавить новую оценку к суммарному рейтингу
            }

            video.VoteCount = newCount;
            video.TotalRating = newRating;

            user.VideoGrades.Add(new Grade
            {
                UserId = userId,
                VideoId = id,
                Value = grade
            });
            _context.SaveChanges();
            return new RateResponse {
                total_rating = newRating,
                users_count = newCount
            };
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
        RateResponse Vote(int userId, int id, float grade);
    }
}