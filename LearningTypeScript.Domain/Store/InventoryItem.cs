using LearningTypeScript.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Domain.Core
{
    public class InventoryItem:BaseRecord
    {
        public int Id { get; set; }
        public decimal BuyInPrice { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }

        public InventoryItem()
            :base()
        {
        }
    }
}
