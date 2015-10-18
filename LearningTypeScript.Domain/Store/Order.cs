using LearningTypeScript.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Domain.Core
{
    public class Order:BaseRecord
    {
        public int Id { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }

        public Order()
            :base()
        {
            OrderItems = new List<OrderItem>();
        }
    }
}
