using CoreWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreWebAPI.Services
{
    public class YouTubeAppContext : DbContext
    {
        public readonly NoEmbedContext _noembedService;

        public YouTubeAppContext(DbContextOptions<YouTubeAppContext> options)
            : base(options)
        { }

        public DbSet<Video> VideoItems { get; set; }
        public DbSet<User> Users { get; set; }
    }
}