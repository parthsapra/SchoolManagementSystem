using System;
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
    public class GuardianDetailsController : ControllerBase
    {
        private readonly StudentContext _context;

        public GuardianDetailsController(StudentContext context)
        {
            _context = context;
        }

        // GET: api/GuardianDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GuardianDetails>>> GetGuardianDetails()
        {
            return await _context.GuardianDetails.ToListAsync();
        }

        // GET: api/GuardianDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GuardianDetails>> GetGuardianDetails(int id)
        {
            var guardianDetails = await _context.GuardianDetails.FindAsync(id);

            if (guardianDetails == null)
            {
                return NotFound();
            }

            return guardianDetails;
        }

        // PUT: api/GuardianDetails/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGuardianDetails(int id, GuardianDetails guardianDetails)
        {
            if (id != guardianDetails.GuardianDetailId)
            {
                return BadRequest();
            }

            _context.Entry(guardianDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GuardianDetailsExists(id))
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

        // POST: api/GuardianDetails
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<GuardianDetails>> PostGuardianDetails(GuardianDetails guardianDetails)
        {
            _context.GuardianDetails.Add(guardianDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGuardianDetails", new { id = guardianDetails.GuardianDetailId }, guardianDetails);
        }

        // DELETE: api/GuardianDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GuardianDetails>> DeleteGuardianDetails(int id)
        {
            var guardianDetails = await _context.GuardianDetails.FindAsync(id);
            if (guardianDetails == null)
            {
                return NotFound();
            }

            _context.GuardianDetails.Remove(guardianDetails);
            await _context.SaveChangesAsync();

            return guardianDetails;
        }

        private bool GuardianDetailsExists(int id)
        {
            return _context.GuardianDetails.Any(e => e.GuardianDetailId == id);
        }
    }
}
