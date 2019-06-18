using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreWebAPI.Entities
{
    public class Video
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        public string url { get; set; }

        [Required]
        [StringLength(200)]
        public string title { get; set; }

        [Required]
        public string thumbnail { get; set; }

        public DateTime? posted_date { get; set; }

        public float? grade { get; set; }
    }
}