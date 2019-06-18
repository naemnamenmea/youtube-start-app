using System;
using System.ComponentModel.DataAnnotations;

namespace CoreWebAPI.Entities
{
    public class Video
    {
        public int id { get; set; }
        public string url { get; set; }
        public string title { get; set; }
        public string thumbnail { get; set; }
        public DateTime? posted_date { get; set; }
        public float? grade { get; set; }
    }
}