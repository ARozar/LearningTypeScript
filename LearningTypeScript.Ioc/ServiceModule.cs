using LearningTypeScript.Domain.Store;
using LearningTypeScript.Services.Store;
using Ninject.Modules;
using Ninject.Web.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Ioc
{
    public class ServiceModule : NinjectModule
    {
        public override void Load()
        {
            Bind(typeof(IStoreService<>)).To(typeof(StoreService<>)).InRequestScope();
        }
    }
}
