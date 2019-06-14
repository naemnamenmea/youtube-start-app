using CoreWebAPI.Dtos;
using CoreWebAPI.Entities;
using CoreWebAPI.Helpers;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;

namespace CoreWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();

            using (DataContext db = new DataContext())
            {
                UserDto admin = new UserDto {
                    Id = 1,
                    Username = "admin",
                    Password = "admin"
                };


                var user = _mapper.Map<User>(userDto);
                _userService.Create(user, userDto.Password);
                db.Users.Add(admin);

                _context = context;

                if (_context.VideoItems.Count() == 0)
                {
                    _context.VideoItems.Add(new Video
                    {
                        id = "l58dipKGTJE",
                        title = "animal",
                        postedDate = new DateTime(),
                        avScore = 0.3f
                    });
                    _context.VideoItems.Add(new Video
                    {
                        id = "LEHny_pGtL0",
                        title = "pain",
                        postedDate = new DateTime(),
                        avScore = 0.7f
                    });
                    _context.SaveChanges();
                }

                db.SaveChanges();

            }
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .ConfigureLogging(logging =>
                {
                    logging.ClearProviders();
                    logging.AddConsole();
                    logging.AddDebug();
                    logging.AddEventSourceLogger();
                })
                //.UseUrls("http://localhost:4000")
                .Build();
    }
}
