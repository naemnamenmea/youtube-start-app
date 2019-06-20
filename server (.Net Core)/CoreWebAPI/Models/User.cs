using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreWebAPI.Models
{
    public class User : IdentityUser
    {
        public User(string userName) : base(userName)
        {
        }

        public List<Video> Videos { get; set; }
    }
}
