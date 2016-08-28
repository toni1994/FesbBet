using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FESBet.Data.Model.Entities
{
    public class Event
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Day { get; set; }

        public string Time { get; set; }

        public string Sport { get; set; }

        public string Country { get; set; }

        public string Type { get; set; }

        public double One { get; set; }

        public double Two { get; set; }

        public double Eqaul { get; set; }

        public double OneEqual { get; set; }

        public double TwoEqual { get; set; }

        public double OneTwo { get; set; }

        public double FavouritePlusTwo { get; set; }

        public virtual ICollection<Pair> Pairs{ get; set; }
    }
}
