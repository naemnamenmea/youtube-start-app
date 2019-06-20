using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoreWebAPI.Models
{
    public class Video
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Url { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; }

        [Required]
        public string Thumbnail { get; set; }

        public DateTime? Posted_date { get; set; }

        public float? TotalRating { get; set; }

        public int? VoteCount { get; set; }

        public ICollection<Grade> UserGrades { get; set; }
    }

    public class RateResponse
    {
        public int users_count { get; set; }
        public float total_rating { get; set; }
    }
}