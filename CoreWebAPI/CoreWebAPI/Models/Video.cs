using System;
using System.ComponentModel.DataAnnotations;

namespace CoreWebAPI.Models
{
    public class Video
    {
        [Key]
        public string id { get; set; }
        public string title { get; set; }
        public string thumbnail { get; set; }
        public DateTime? posted_date { get; set; }
        public float? grade { get; set; }
    }
}