using CoreWebAPI.Helpers;
using CoreWebAPI.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.IO;

namespace CoreWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            bool EnvActivated = false;
            string ConnectionNameKey = "ConnectionName";
            string ConnectionNameValue = "HomeConnection";

            if(Environment.GetEnvironmentVariable(ConnectionNameKey) == null)
            {
                Environment.SetEnvironmentVariable(ConnectionNameKey, ConnectionNameValue);
                EnvActivated = true;
            }

            //var config = new ConfigurationBuilder()
            //    .SetBasePath(Directory.GetCurrentDirectory())
            //    .AddJsonFile("appsettings.json", optional: false)
            //    .AddCommandLine(args)
            //    .Build();

            //using (DataContext context = new DataContext(config.GetConnectionString("DefaultConnection")))
            //{

            //}
            
            BuildWebHost(args).Run();

            if(EnvActivated)
            {
                Environment.SetEnvironmentVariable(ConnectionNameKey, null);
            }
        }

        public static IWebHost BuildWebHost(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args)
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
}
