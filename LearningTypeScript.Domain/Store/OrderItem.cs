using LearningTypeScript.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Domain.Core
{
    public class OrderItem:BaseRecord
    {
        public int Id { get; set; }
        public virtual ICollection<InventoryItem> InventoryItems { get; set; }
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }

        public OrderItem()
            :base()
        {
            InventoryItems = new List<InventoryItem>();
        }
    }
}
