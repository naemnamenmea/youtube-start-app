using CoreWebAPI.Services;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using System.Threading.Tasks;
using CoreWebAPI.Models;

namespace CoreWebAPI.Models
{
    public class VideoService : DbContext
    {
        public readonly NoEmbedService _noembedService;

        public VideoService(DbContextOptions<VideoService> options)
            : base(options)
        {
        }

        public DbSet<Video> VideoItems { get; set; }

        public DbSet<User> Users { get; set; }

        //public string ConnectionString { get; set; }

        //public VideoContext(string connectionString)
        //{
        //    this.ConnectionString = connectionString;
        //}

        //private MySqlConnection GetConnection()
        //{
        //    return new MySqlConnection(ConnectionString);
        //}

    }
}