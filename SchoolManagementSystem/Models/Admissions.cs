using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Models
{
    public class Admissions
    {
        [Key]
        public int AdmissionId { get; set; }
        public int StudentId { get; set; }
        public int StandardId { get; set; }
        public bool AdmissionStatus { get; set; }
    }
}
