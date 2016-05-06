using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FESBet.Data.Model.Entities;
using FESBet.Data.Model;

namespace FESBet.Domain.Repositories
{
    public interface IUsersRepository
    {
        IEnumerable<User> GetAllUsers();
    }

    public class UsersRepository : IUsersRepository
    {
        public UsersRepository(IFESBetContext FESBetContext)
        {
            this.FESBetContext = FESBetContext;
        }

        private readonly IFESBetContext FESBetContext;

        public IEnumerable<User> GetAllUsers()
        {
            return FESBetContext.Users.AsEnumerable<User>();
        }
    }

}
