using LearningTypeScript.Domain.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Domain.Customer
{
    public class Customer
    {
        public int Id { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }

        public Customer()
        {
            Orders = new List<Order>();
        }
    }
}
