using LearningTypeScript.Domain.Core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Data.Context
{
    public class DataContext :DbContext
    {
        public IDbSet<Product> Products { get; set; }

        public DataContext()
            :base("DefaultConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }
    }
}
