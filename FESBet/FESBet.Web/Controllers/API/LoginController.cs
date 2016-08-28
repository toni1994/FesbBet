using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using FESBet.Data.Model;
using FESBet.Data.Model.Entities;
using Newtonsoft.Json.Linq;

namespace FESBet.Web.Controllers.API
{
    [RoutePrefix("login")]
    public class LoginController : ApiController
    {
        public LoginController(IFESBetContext context, FESBetContext contex2)
        {
            _cookieLoginService = new CookieLoginService(context);
            _context = context;
        }
        private readonly CookieLoginService _cookieLoginService;
        private IFESBetContext _context;

        [HttpPost]
        [Route("signin")]
        public JObject Login(JObject loginObject)
        {
            var role = _cookieLoginService.SignIn(loginObject["username"].ToObject<string>(),
                loginObject["password"].ToObject<string>());

            if (role == string.Empty)
                return null;

            dynamic jsonObject = new JObject();
            jsonObject.Role = role;
            return jsonObject;
        }

        [HttpGet]
        [Route("get-logged")]
        public User GetLogged()
        {
            var username = _cookieLoginService.TryGetSignedInUserId();
            var usersList = _context.Users.ToList();
            var loggedUser = usersList.FirstOrDefault(x => (x.Email == username || x.Username == username));
            return loggedUser;

        }

        [HttpDelete]
        [Route("signout")]
        public IHttpActionResult Logout()
        {
            _cookieLoginService.SignOut();
            return Ok();
        }

        [HttpGet]
        [Route("test")]
        public List<string> SamoTest()
        {
            _cookieLoginService.TryGetSignedInUserId();
            return new List<string> { "mario", "ante", "ivan", "sasa" };
        }
    }
}

