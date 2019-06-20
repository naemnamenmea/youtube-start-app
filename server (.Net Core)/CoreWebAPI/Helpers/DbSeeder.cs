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
            string onInit = "on_init";
            Video video = new Video();
            video.Thumbnail = onInit;
            video.Url = onInit;
            video.Title = onInit;
            context.VideoItems.Add(video);
            context.SaveChanges();
        }

        private static void SeedUsers(UserManager<User> userManager, IMapper mapper)
        {
            var users = new List<Tuple<User, string>>() {
                new Tuple<User,string>(new User("admin"), "tesT321!"),
                new Tuple<User,string>(new User("test"), "tesT123!")
            };

            foreach (var user in users) {
                userManager.CreateAsync(user.Item1, user.Item2).Wait();
            }
        }
    }
}
