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
            Video video = new Video {
                Thumbnail = onInit,
                Url = onInit,
                Title = onInit
            };
            if(context.VideoItems.FirstOrDefault(v => v.Url == onInit) == null)
            {
                context.VideoItems.Add(video);
                context.SaveChanges();
            }
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
