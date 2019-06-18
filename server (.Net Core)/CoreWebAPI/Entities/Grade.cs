using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPI.Entities
{
    public class Grade
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("fk_users")]
        public int UserId { get; set; }
        [ForeignKey("fk_videos")]
        public int VideoId { get; set; }
    }
}
