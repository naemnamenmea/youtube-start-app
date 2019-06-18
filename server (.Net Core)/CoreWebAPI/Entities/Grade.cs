using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreWebAPI.Entities
{
    public class Grade
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [ForeignKey("fk_users")]
        public int UserId { get; set; }
        [ForeignKey("fk_videos")]
        public int VideoId { get; set; }
    }
}
