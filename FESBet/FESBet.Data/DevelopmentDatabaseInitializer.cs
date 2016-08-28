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
        public new void InitializeDatabase(FESBetContext context)
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
                new User { Id = 1, DateOfBirth = DateTime.Now, Email = "toni.buzov@fesb.hr", FirstName = "Toni", LastName = "Buzov", Money = 1000.0F, Password =  "password", Username = "username"}
            }, _ => context.Users.Add(_));

            Array.ForEach(new[]
            {
                new Event{ Name = "Sevina - Barcelona", Day = "Mon", Time = "18: 00", Sport = "Nogomet", Country = "Spanjolska", One = 1.5, Two = 1.6, Eqaul = 3, OneEqual = 1.1, TwoEqual = 1.2, OneTwo = 1.15, FavouritePlusTwo = 4},
                new Event{ Name = "Sevina - Test", Day = "Mon", Time = "18: 00", Sport = "Nogomet", Country = "Spanjolska", One = 1.5, Two = 1.6, Eqaul = 3, OneEqual = 1.1, TwoEqual = 1.2, OneTwo = 1.15, FavouritePlusTwo = 4},
                new Event{ Name = "Sevina - Test2", Day = "Mon", Time = "18: 00", Sport = "Nogomet", Country = "Spanjolska", One = 1.5, Two = 1.6, Eqaul = 3, OneEqual = 1.1, TwoEqual = 1.2, OneTwo = 1.15, FavouritePlusTwo = 4},
                new Event{ Name = "Sevina - Test3", Day = "Mon", Time = "18: 00", Sport = "Nogomet", Country = "Spanjolska", One = 1.5, Two = 1.6, Eqaul = 3, OneEqual = 1.1, TwoEqual = 1.2, OneTwo = 1.15, FavouritePlusTwo = 4},
                new Event{ Name = "Sevina - Test4", Day = "Mon", Time = "18: 00", Sport = "Nogomet", Country = "Spanjolska", One = 1.5, Two = 1.6, Eqaul = 3, OneEqual = 1.1, TwoEqual = 1.2, OneTwo = 1.15, FavouritePlusTwo = 4},
            }, _ => context.Events.Add(_));
            context.SaveChanges();
        }
    }
}
