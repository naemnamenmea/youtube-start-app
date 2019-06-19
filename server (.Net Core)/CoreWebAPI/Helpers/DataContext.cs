using CoreWebAPI.Models;
using CoreWebAPI.Services;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace CoreWebAPI.Helpers
{

    public class DataContext : IdentityDbContext<User>
    {
        public readonly NoEmbedService _noembedService;

        public DataContext(DbContextOptions<DataContext> options)
                : base(options)
        { }

        public DbSet<Video> VideoItems { get; set; }        
        public DbSet<Grade> Grades { get; set; }
    }
}