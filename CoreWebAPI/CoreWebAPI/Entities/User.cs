using System.ComponentModel.DataAnnotations;

namespace CoreWebAPI.Entities
{
    public class User
    {
        [Key]
        public int id { get; set; }
        public string password { get; set; }
        public string username { get; set; }
    }
}
