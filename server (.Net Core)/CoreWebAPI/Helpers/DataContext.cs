using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace CoreWebAPI.Helpers
{

    public class DataContext : IdentityDbContext<User>
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
    }
}



