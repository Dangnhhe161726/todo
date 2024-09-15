using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoAppDeploy.Models;

namespace TodoAppDeploy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly todoappdeployContext _context;
        public UserController(todoappdeployContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllUser")]
        public IActionResult Get()
        {
            var listUser = _context.Users.ToList();
            return Ok(listUser);
        }
    }
}
