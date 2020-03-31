using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Models
{
    public class StudentDetails
    {
        [Key]
        public int StudentDetailId { get; set; }
        public int StudentId { get; set; }
        public string Address { get; set; }
        public string StudentHeight { get; set; }
        public string StudentWeight { get; set; }
        public string StudentPlaceOfbirth { get; set; }
        public string MotherTongue { get; set; }
        public string AadharCardNumber { get; set; }
        public string Nationality { get; set; }
        public bool Gender { get; set; }
        public string Religion { get; set; }
        public string IdentificationMark { get; set; }
        public string BloodGroup { get; set; }
        public int NumberOfSiblings { get; set; }
        public string LastAdmissionSchoolName { get; set; }
    }
}
