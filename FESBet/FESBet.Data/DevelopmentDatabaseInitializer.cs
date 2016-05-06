using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FESBet.Data.Model;
using FESBet.Data.Model.Entities;
using System.Data.Entity;

namespace FESBet.Data
{
    public class DevelopmentDatabaseInitializer : DropCreateDatabaseAlways<FESBetContext>
    {
        public override void InitializeDatabase(FESBetContext context)
        {
            context.Database.CreateIfNotExists();
            // Prevents “Cannot drop database because it is currently in use” error.
            context.Database.ExecuteSqlCommand(TransactionalBehavior.DoNotEnsureTransaction, $"ALTER DATABASE {context.Database.Connection.Database} SET SINGLE_USER WITH ROLLBACK IMMEDIATE");
            base.InitializeDatabase(context);
        }

        protected override void Seed(FESBetContext context)
        {
            Array.ForEach(new[]
            {
                new User { Id = 1, DateOfBirth = DateTime.Now, Email = "test.com", FirstName = "Ivan", LastName = "teeest", Money = 0.0F, Password =  "password", Username = "username"}
            }, _ => context.Users.Add(_));

            context.SaveChanges();
        }
    }
}
