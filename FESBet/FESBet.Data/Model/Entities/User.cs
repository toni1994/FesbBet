﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FESBet.Data.Model.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public float Money { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
