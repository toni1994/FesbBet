using System.Linq;
using System.Web;
using System.Web.Security;
using FESBet.Data.Model;

namespace FESBet.Web
{
   

    public class CookieLoginService 
    {
        public CookieLoginService(IFESBetContext context)
        {
            _context = context;
        }
        private readonly IFESBetContext _context;
        
        public string TryGetSignedInUserId()
        {
            if (HttpContext.Current.User == null) { return null; }

            var identity = HttpContext.Current.User.Identity;
            if (!identity.IsAuthenticated) { return null; }

            var saltedUserUid = identity.Name;
            var username = saltedUserUid;
            return username;
        }

        public string SignIn(string username, string password)
        {
            if (!_context.Users.Any(x => (x.Email == username || x.Username == username)&& x.Password == password))
            {
                return string.Empty;
            }
            var cookieValue = $"{username}";
            FormsAuthentication.SetAuthCookie(cookieValue, true);
            return "user";
        }

        public void SignOut()
        {
            FormsAuthentication.SignOut();
        }
    }
}