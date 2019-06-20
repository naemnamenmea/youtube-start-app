using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace CoreWebAPI.Helpers
{

    public class DataContext : IdentityDbContext<User, IdentityRole<int>,int>
    {
        public readonly NoEmbedService _noembedService;

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        { }

        public DataContext(string connectionString)
            :base(GetOptions(connectionString))
        { }

        private static DbContextOptions GetOptions(string connectionString)
        {
            return MySqlDbContextOptionsExtensions.UseMySql(new DbContextOptionsBuilder(), connectionString).Options;
        }

        public DbSet<Video> VideoItems { get; set; }
        public DbSet<Grade> Grades { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Video>()
                .HasKey(x => x.Id);

            builder.Entity<User>()
                .HasKey(x => x.Id);

            builder.Entity<Grade>()
                .HasKey(x => new { x.UserId, x.VideoId });
            builder.Entity<Grade>()
                .HasOne(x => x.User)
                .WithMany(m => m.VideoGrades)
                .HasForeignKey(x => x.UserId);
            builder.Entity<Grade>()
                .HasOne(x => x.Video)
                .WithMany(m => m.UserGrades)
                .HasForeignKey(x => x.VideoId);
        }
    }
}



