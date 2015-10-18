using LearningTypeScript.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Domain.Core
{
    public class Product:BaseRecord
    {
        public int Id { get; set; }
        public virtual ICollection<InventoryItem> InventoryItems { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public Product()
            :base()
        {
            InventoryItems = new List<InventoryItem>();
        }
    }
}
