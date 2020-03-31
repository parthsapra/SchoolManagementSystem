using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SchoolManagementSystem.Models;

namespace SchoolManagementSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly StudentContext studentContexts;
        public StudentsController(StudentContext studentContext)
        {
            studentContexts = studentContext;
        }
        [HttpPost]
        public async Task<ActionResult<Student>> AddStudent(Student student)
        {
            studentContexts.Students.Add(student);
            await studentContexts.SaveChangesAsync();

            return CreatedAtAction("GetStudents", new { id = student.StudentId}, student);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudents(int id)
        {
            var students = await studentContexts.Students.FindAsync(id);

            if (students == null)
            {
                return NotFound();
            }

            return students;
        }
    }
}
