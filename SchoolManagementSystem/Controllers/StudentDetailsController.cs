﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolManagementSystem.Models;

namespace SchoolManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentDetailsController : ControllerBase
    {
        private readonly StudentContext _context;

        public StudentDetailsController(StudentContext context)
        {
            _context = context;
        }

        // GET: api/StudentDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDetails>>> GetStudentDetails()
        {
            return await _context.StudentDetails.ToListAsync();
        }

        // GET: api/StudentDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentDetails>> GetStudentDetails(int id)
        {
            var studentDetails = await _context.StudentDetails.FindAsync(id);

            if (studentDetails == null)
            {
                return NotFound();
            }

            return studentDetails;
        }

        // PUT: api/StudentDetails/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentDetails(int id, StudentDetails studentDetails)
        {
            if (id != studentDetails.StudentDetailId)
            {
                return BadRequest();
            }

            _context.Entry(studentDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StudentDetails
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<StudentDetails>> PostStudentDetails(StudentDetails studentDetails)
        {
            _context.StudentDetails.Add(studentDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentDetails", new { id = studentDetails.StudentDetailId }, studentDetails);
        }

        // DELETE: api/StudentDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StudentDetails>> DeleteStudentDetails(int id)
        {
            var studentDetails = await _context.StudentDetails.FindAsync(id);
            if (studentDetails == null)
            {
                return NotFound();
            }

            _context.StudentDetails.Remove(studentDetails);
            await _context.SaveChangesAsync();

            return studentDetails;
        }

        private bool StudentDetailsExists(int id)
        {
            return _context.StudentDetails.Any(e => e.StudentDetailId == id);
        }
    }
}
