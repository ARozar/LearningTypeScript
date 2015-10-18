using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Domain.Customer
{
    public class Address
    {
        public int Id { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
        public string HouseNumber { get; set; }
        public int FirstLine { get; set; }
        public string SecondLine { get; set; }
        public string ThirdLine { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public string PostCode { get; set; }


        public Address()
        {
            Customers = new List<Customer>();
        }
    }
}
