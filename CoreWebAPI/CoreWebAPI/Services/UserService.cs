using CoreWebAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPI.Services
{
    public class UserService : IUserService
    {
        private readonly YouTubeAppContext _context;

        public UserService(YouTubeAppContext ctx)
        {
            _context = ctx;
        }

        public User GetUser(string username)
        {
            //return (from u in _context.Users where u.username == username select u).FirstOrDefault();
            return _context.Users.FirstOrDefault(u => u.username == username);
        }
    }

    public interface IUserService
    {
        User GetUser(string username);
    }
}
