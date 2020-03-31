using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Models
{
    public class GuardianDetails
    {
        [Key]
        public int GuardianDetailId { get; set; }
        public int StudentId { get; set; }
        public string FatherName { get; set; }
        public string MotherName { get; set; }
        public string FatherOccupation { get; set; }
        public string MotherOccupation { get; set; }
        public string FatherEducation { get; set; }
        public string MotherEducation { get; set; }
        public string FatherReligion { get; set; }
        public string ContactNumber { get; set; }
        public string EmailId { get; set; }
        public  string Address { get; set; }
        public int Pincode { get; set; }
    }
}
