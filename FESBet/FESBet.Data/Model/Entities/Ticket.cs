using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FESBet.Data.Model.Entities
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public double Payin { get; set; }

        public double TotalOdds { get; set; }

        public double Money { get; set; }

        public double Win { get; set; }

        public int Status { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public ICollection<Pair> Pairs { get; set; }
    }
}
