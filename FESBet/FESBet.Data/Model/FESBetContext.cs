using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FESBet.Data.Model.Entities;
using System.Data.Entity;
using System.Data.Common;

namespace FESBet.Data.Model
{
    public interface IFESBetContext
    {
        IDbSet<User> Users { get; set; }
    }

    public class FESBetContext : DbContext, IFESBetContext
    {
        public IDbSet<User> Users { get; set; }

        public FESBetContext(DbConnection connection)
            : base(connection, true)
        {
        }

        public FESBetContext(string FESBetConnectionString, IDatabaseInitializer<FESBetContext> databaseInitializer) 
            : base(FESBetConnectionString)
        {
            Database.SetInitializer(databaseInitializer);
        }
    }
}
