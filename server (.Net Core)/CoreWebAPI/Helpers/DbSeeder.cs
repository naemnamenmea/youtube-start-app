using AutoMapper;
using CoreWebAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPI.Helpers
{
    public class DbSeeder
    {
        public static void SeedDb(DataContext context, UserManager<User> userManager, IMapper mapper)
        {
            SeedUsers(userManager, mapper);
            SeedVideos(context);
        }

        private static void SeedVideos(DataContext context)
        {
            context.Database.EnsureCreated();

            string onInit = "on_init_empty_video";
            List<Video> videos = new List<Video> {
                new Video{
                    Thumbnail = onInit,
                    Url = onInit,
                    Title = onInit,
                    Posted_date = DateTime.UtcNow.AddDays(-14)
                },
                new Video{
                    Thumbnail = "https://i.ytimg.com/vi/MyZpNZbuEF8/hqdefault.jpg",
                    Url = "MyZpNZbuEF8",
                    Title = "Harry Potter: Wizards Unite | Launch Trailer",
                    Posted_date = DateTime.UtcNow.AddDays(-43)
                },
                new Video{
                    Thumbnail = "https://i.ytimg.com/vi/TZE9gVF1QbA/hqdefault.jpg",
                    Url = "TZE9gVF1QbA",
                    Title = "Opening Credits | Game of Thrones | Season 8(HBO)",
                    Posted_date = DateTime.UtcNow.AddDays(-13)
                },
               new Video{
                    Thumbnail = "https://i.ytimg.com/vi/Xs6_vecSv2Y/hqdefault.jpg",
                    Url = "Xs6_vecSv2Y",
                    Title = "Breaking Bad Greatest Moments",
                    Posted_date = DateTime.UtcNow.AddDays(-21)
                }
            };

            foreach (var video in videos)
            {
                int Id = 0;
                if (context.VideoItems.Any(v => v.Url == video.Url))
                {
                    //Id = video.Id;
                    //context.VideoItems.Remove()
                    //context.ObjectStateManager.
                } else
                {
                    context.VideoItems.Add(video);
                }
            }
            context.SaveChanges();
        }

        private static void SeedUsers(UserManager<User> userManager, IMapper mapper)
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
