﻿using CoreWebAPI.Models;
using CoreWebAPI.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using AutoMapper;

namespace CoreWebAPI.Services
{
    public class VideoService : IVideoService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public VideoService(DataContext ctx, IMapper mapper)
        {
            _context = ctx;
            _mapper = mapper;
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
            return _context.VideoItems.FirstOrDefaultAsync(v => v.VideoId == url);
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

        public async Task<ActionResult<IEnumerable<UserRelatedVideoInfo>>> GetUserRelatedVideoInfoAsync(int userId)
        {
            List<Video> videos = await _context.VideoItems.ToListAsync();
            var res = new List<UserRelatedVideoInfo>();
            foreach (var video in videos)
            {
                var tmp = _mapper.Map<UserRelatedVideoInfo>(video);
                tmp.IsModifiable = (_context.Grades.Find(userId, video.Id) == null);
                res.Add(tmp);
            }
            return res;
        }

        public void Remove(Video video)
        {
            _context.Remove(video);
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }

        public object Vote(int userId, int id, float grade)
        {
            User user = _context.Users.Include(u => u.VideoGrades).FirstOrDefault(u => u.Id == userId);
            Video video = _context.VideoItems.FirstOrDefault(v => v.Id == id);

            if (user == null || video == null)
            {
                return null;
            }

            var _grade = _context.Grades.Find(userId,id);

            if (_grade == null)
            {
                ++video.VoteCount;

                user.VideoGrades.Add(new Grade
                {
                    UserId = userId,
                    VideoId = id,
                    Value = grade
                });                
            }
            else
            {
                video.TotalRating -= _grade.Value;
                _grade.Value = grade;
            }
            video.TotalRating += grade;
            video.AvRating = video.TotalRating / video.VoteCount;

            _context.SaveChanges();

            return new { avRating = video.AvRating };
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
        object Vote(int userId, int id, float grade);
        Task<ActionResult<IEnumerable<UserRelatedVideoInfo>>> GetUserRelatedVideoInfoAsync(int userId);
    }
}