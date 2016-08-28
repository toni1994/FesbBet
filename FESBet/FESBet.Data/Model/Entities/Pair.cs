using System.ComponentModel.DataAnnotations;

namespace FESBet.Data.Model.Entities
{
    public class Pair
    {
        [Key]
        public int Id { get; set; }

        public Event Event { get; set; }

        public int EventId { get; set; }

        public int TypePlayed { get; set; }

        public int Status { get; set; }

        public Ticket Ticket { get; set; }

        public int TicketId { get; set; }
    }
}
