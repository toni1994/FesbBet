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
        void Add(User user);
    }

    public class UsersRepository : IUsersRepository
    {
        public UsersRepository(FESBetContext FESBetContext)
        {
            this.FESBetContext = FESBetContext;
        }

        private readonly FESBetContext FESBetContext;

        public IEnumerable<User> GetAllUsers()
        {
            return FESBetContext.Users.AsEnumerable<User>();
        }

        public void Add(User user)
        {
            user.Money = 1500000;
            this.FESBetContext.Users.Add(user);
            this.FESBetContext.SaveChanges();
        }
    }

}
