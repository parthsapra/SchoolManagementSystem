using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Models
{
    public class Standards
    {
        [Key]
        public int StandardId { get; set; }
        public string StandardTypr { get; set; }
    }
}
