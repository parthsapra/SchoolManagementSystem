using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Models
{
    public class StudentContext:DbContext
    {
        public StudentContext(DbContextOptions<StudentContext> options) : base(options) { }
        public DbSet<Student> Students { get; set; }
        public DbSet<StudentDetails> StudentDetails { get; set; }
        public DbSet<GuardianDetails> GuardianDetails { get; set; }
        public DbSet<Admissions> Admissions { get; set; }
        public DbSet<Fees> Fees { get; set; }
        public DbSet<Standards> Standards { get; set; }
    }
}
