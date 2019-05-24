using System;

namespace CoreWebAPI.Models
{
    public class Video
    {
        public string id { get; set; }
        public string title { get; set; }
        public DateTime? postedDate { get; set; }
        public float? avScore { get; set; }       
    }
}
