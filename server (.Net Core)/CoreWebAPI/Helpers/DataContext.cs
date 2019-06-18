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
        public DbSet<ApplicationUser> Users { get; set; }
        /*
         * Charset/Collation: utf8mb4 / utf8mb4_0900_ai_ci
         * Engine: InnoDB
         */
        public DbSet<Grade> Grades { get; set; }
    }
}