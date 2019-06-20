using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreWebAPI.Models
{
    public class User : IdentityUser<int>
    {               
        public User(string userName) : base(userName)
        {
        }

        public ICollection<Grade> VideoGrades { get; set; }
    }
}
