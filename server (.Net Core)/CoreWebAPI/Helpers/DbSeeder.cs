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
        public static void SeedDb(DataContext context, UserManager<User> userManager)
        {
            SeedUsers(userManager);
            SeedVideos(context);
        }

        private static void SeedVideos(DataContext context)
        {
            context.Database.EnsureCreated();
            /*
             * Adding entities
             */
            context.SaveChanges();
        }

        private static void SeedUsers(UserManager<User> userManager)
        {
            User admin = new User
            {
                UserName = "admin"
            };

            //userManager.fid
            userManager.CreateAsync(admin, "admin").Wait();
            userManager.AddToRoleAsync(admin,"Admin");
        }
    }
}
