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
    public class InventoryItemsController : ApiController
    {

        private IStoreService<InventoryItem> _inventoryService;

        public InventoryItemsController(IStoreService<InventoryItem> inventoryService)
        {
            _inventoryService = inventoryService;
        }
        // GET: api/InventoryItems
        public IQueryable<InventoryItem> GetInventoryItems()
        {
            return _inventoryService.AllWhere();
        }

        // GET: api/InventoryItems/5
        [ResponseType(typeof(InventoryItem))]
        public IHttpActionResult GetInventoryItem(int id)
        {
            InventoryItem inventoryItem = _inventoryService.Find(id);
            if (inventoryItem == null)
            {
                return NotFound();
            }

            return Ok(inventoryItem);
        }

        // PUT: api/InventoryItems/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInventoryItem(int id, InventoryItem inventoryItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != inventoryItem.Id)
            {
                return BadRequest();
            }

            _inventoryService.Update(inventoryItem);

            try
            {
                _inventoryService.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventoryItemExists(id))
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

        // POST: api/InventoryItems
        [ResponseType(typeof(InventoryItem))]
        public IHttpActionResult PostInventoryItem(InventoryItem inventoryItem)
        {
            if (!ModelState.IsValid|| inventoryItem.ProductId ==0)
            {
                return BadRequest(ModelState);
            }

            _inventoryService.Insert(inventoryItem);
            _inventoryService.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = inventoryItem.Id }, inventoryItem);
        }

        // DELETE: api/InventoryItems/5
        [ResponseType(typeof(InventoryItem))]
        public IHttpActionResult DeleteInventoryItem(int id)
        {
            InventoryItem inventoryItem = _inventoryService.Find(id);
            if (inventoryItem == null)
            {
                return NotFound();
            }

            _inventoryService.Delete(inventoryItem);
            _inventoryService.SaveChanges();

            return Ok(inventoryItem);
        }

        private bool InventoryItemExists(int id)
        {
            return _inventoryService.Find(id) !=null;
        }
    }
}