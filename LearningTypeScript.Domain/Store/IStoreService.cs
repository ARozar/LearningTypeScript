using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Domain.Store
{
    public interface IStoreService<T> where T :class
    {
        IQueryable<T> Include(params Expression<Func<T, object>>[] predicates);
        IQueryable<T> AllWhere(params Expression<Func<T, bool>>[] predicates);
        T Find(int Id);
        bool Delete(int id);
        bool Delete(T obj);
        bool Insert(T obj);
        bool SaveChanges();
        bool Update(T obj);
    }
}
