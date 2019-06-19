using System.ComponentModel.DataAnnotations;

namespace CoreWebAPI.Models
{
    public class LoginUserModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
