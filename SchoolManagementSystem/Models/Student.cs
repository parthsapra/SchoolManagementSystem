using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public string StudentGaurdianName { get; set; }
        public int StudentGRNo { get; set; }
        public DateTime DateofBirth { get; set; }
        public int StandardId { get; set; }
    }
}
