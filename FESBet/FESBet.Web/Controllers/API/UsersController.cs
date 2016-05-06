using FESBet.Data.Model;
using FESBet.Data.Model.Entities;
using FESBet.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FESBet.Web.Controllers.API
{
    [RoutePrefix("api")]
    public class UsersController : ApiController
    {
        public UsersController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        private readonly IUsersRepository _usersRepository;

        [HttpGet]
        [Route("test")]
        public IEnumerable<User> Test()
        {
            return _usersRepository.GetAllUsers();
        }
    }
}
