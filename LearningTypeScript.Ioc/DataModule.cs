using LearningTypeScript.Data.Context;
using LearningTypeScript.Data.Repositories;
using LearningTypeScript.Domain.Data;
using Ninject.Modules;
using Ninject.Web.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Ioc
{
    public class DataModule: NinjectModule
    {
        public override void Load()
        {
            Bind<DbContext>().To<DataContext>().InRequestScope();
            
            Bind(typeof(IRepository<>)).To(typeof(BaseRepository<>));
            
        }
    }
}
