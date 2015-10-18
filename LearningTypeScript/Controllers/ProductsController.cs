using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LearningTypeScript.Domain.Core;
using LearningTypeScript.Models;
using LearningTypeScript.Domain.Store;

namespace LearningTypeScript.Controllers
{
    public class ProductsController : ApiController
    {
        private IStoreService<Product> _productService;

        public ProductsController(IStoreService<Product> productService)
        {
            _productService = productService;
        }

        // GET: api/Products
        public IQueryable<Product> GetProducts()
        {
            //TODO include inventory items
            return _productService.Include(prop=>prop.InventoryItems);
        }

        // GET: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(int id)
        {
            Product product = _productService.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/Products/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }
            _productService.Update(product);
            
            try
            {
                _productService.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(Product))]
        public IHttpActionResult PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _productService.Insert(product);
            _productService.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = _productService.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            _productService.Delete(product);
            _productService.SaveChanges();

            return Ok(product);
        }

        private bool ProductExists(int id)
        {
            return _productService.Find(id) !=null;
        }
    }
}