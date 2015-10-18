using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace LearningTypeScript.Data.Repositories
{
    public class BaseRepository<T> : IDisposable, Domain.Data.IRepository<T> where T : class
    {
        private readonly DbContext _context;

        private readonly IDbSet<T> _set;

        public BaseRepository(DbContext context)
        {
            _context = context;
            _set = context.Set<T>();
        }

        public T Find(int Id)
        {
            return _set.Find(Id);
        }

        public IQueryable<T> AllWhere(params Expression<Func<T, bool>>[] predicates)
        {
            if (predicates == null || !predicates.Any())
                return _set;


            var queried = _set.AsQueryable();

            foreach (var predicate in predicates)
            {
                queried = queried.Where(predicate);
            }

            return queried;
        }

        public IQueryable<T> Include(params Expression<Func<T, object>>[] predicates)
        {
            if (predicates == null || !predicates.Any())
                return _set;


            var queried = _set.AsQueryable();

            foreach (var predicate in predicates)
            {
                queried = queried.Include(predicate);
            }

            return queried;
        }

        public bool Insert(T obj)
        {
            try
            {
                _set.Add(obj);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool Update(T obj)
        {
            try
            {
                _context.Entry(obj).State = EntityState.Modified;
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool Delete(int id)
        {
            try
            {
                var entity = _set.Find(id);
                _context.Entry(entity).State = EntityState.Deleted;

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool Delete(T obj)
        {
            try
            {
                _context.Entry(obj).State = EntityState.Deleted;
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool SaveChanges()
        {
            try
            {
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public void Dispose()
        {
            try
            {
                _context.Dispose();
            }
            catch (Exception e)
            {

            }
        }
    }
}
