﻿using AutoMapper;
using CoreWebAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CoreWebAPI.Helpers
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(DataContext context, UserManager<User> userManager)
        {
            SeedUsers(userManager);
            SeedVideos(context);
            SeedGrades(context);
        }

        private static void SeedGrades(DataContext context)
        {
            context.Database.ExecuteSqlCommand("TRUNCATE TABLE Grades");
        }

        private static void SeedVideos(DataContext context)
        {
            context.Database.EnsureCreated();

            string onInit = "on_init_empty_video";
            List<Video> videos = new List<Video> {
                new Video{
                    Thumbnail = onInit,
                    VideoId = onInit,
                    Title = onInit,
                    Posted_date = DateTime.UtcNow.AddDays(-14)
                },
                new Video{
                    Thumbnail = "https://i.ytimg.com/vi/MyZpNZbuEF8/hqdefault.jpg",
                    VideoId = "MyZpNZbuEF8",
                    Title = "Harry Potter: Wizards Unite | Launch Trailer",
                    Posted_date = DateTime.UtcNow.AddDays(-43)
                },
                new Video{
                    Thumbnail = "https://i.ytimg.com/vi/TZE9gVF1QbA/hqdefault.jpg",
                    VideoId = "TZE9gVF1QbA",
                    Title = "Opening Credits | Game of Thrones | Season 8(HBO)",
                    Posted_date = DateTime.UtcNow.AddDays(-13)
                },
               new Video{
                    Thumbnail = "https://i.ytimg.com/vi/Xs6_vecSv2Y/hqdefault.jpg",
                    VideoId = "Xs6_vecSv2Y",
                    Title = "Breaking Bad Greatest Moments",
                    Posted_date = DateTime.UtcNow.AddDays(-21)
                }
            };

            foreach (var video in videos)
            {
                var _video = context.VideoItems.FirstOrDefault(v => v.VideoId == video.VideoId);
                if (_video != null)
                {
                    _video.Title = video.Title;
                    _video.TotalRating = video.TotalRating;
                    _video.VoteCount = video.VoteCount;
                    _video.AvRating = video.AvRating;
                    //video.Id = _video.Id;
                    //context.Entry(_video).CurrentValues.SetValues(video);
                }
                else
                {
                    context.VideoItems.Add(video);
                }
                context.SaveChanges();
            }
        }

        private static void SeedUsers(UserManager<User> userManager)
        {
            var users = new List<Tuple<User, string>>() {
                new Tuple<User,string>(new User("admin"), "tesT321!"),
                new Tuple<User,string>(new User("test"), "tesT123!")
            };

            foreach (var user in users)
            {
                userManager.CreateAsync(user.Item1, user.Item2).Wait();
            }
        }
    }
}
