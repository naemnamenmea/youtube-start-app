using CoreWebAPI.Entities;
using CoreWebAPI.Services;
using Microsoft.EntityFrameworkCore;

namespace CoreWebAPI.Helpers
{
    public class DataContext : DbContext
    {
        public readonly NoEmbedService _noembedService;

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Video> VideoItems { get; set; }
        public DbSet<User> Users { get; set; }
    }
}