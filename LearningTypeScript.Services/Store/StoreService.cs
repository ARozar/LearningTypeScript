using LearningTypeScript.Domain.Data;
using LearningTypeScript.Domain.Store;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace LearningTypeScript.Services.Store
{
    /// <summary>
    /// Simple means of accessing the data entities 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class StoreService<T> :IStoreService<T> where T :class
    {
        private IRepository<T> _repo;

        public StoreService(Domain.Data.IRepository<T> repo)
        {
            _repo = repo;
        }

        public IQueryable<T> AllWhere(params Expression<Func<T, bool>>[] predicates)
        {
            return _repo.AllWhere(predicates);
        }

        public virtual bool Delete(T obj)
        {
            return _repo.Delete(obj);
        }

        public virtual bool Delete(int id)
        {
            return _repo.Delete(id);
        }

        public T Find(int Id)
        {
            return _repo.Find(Id);
        }

        public virtual IQueryable<T> Include(params Expression<Func<T, object>>[] predicates)
        {
            return _repo.Include(predicates);
        }

        public virtual bool Insert(T obj)
        {
            return _repo.Insert(obj);
        }

        public virtual bool SaveChanges()
        {
            return _repo.SaveChanges();
        }

        public virtual bool Update(T obj)
        {
            return _repo.Update(obj);
        }
    }
}
