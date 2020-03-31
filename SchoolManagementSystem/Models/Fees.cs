using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Models
{
    public class Fees
    {
        [Key]
        public int FeeId { get; set; }
        public int StudentId { get; set; }
        public int FeesPaid { get; set; }
        public int TotalFees { get; set; }
        public DateTime DateofFeePaid { get; set; }
        public string Installment { get; set; }
    }
}
