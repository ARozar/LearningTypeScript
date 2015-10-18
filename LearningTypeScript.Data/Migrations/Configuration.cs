namespace LearningTypeScript.Data.Migrations
{
    using Domain.Core;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<LearningTypeScript.Data.Context.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "LearningTypeScript.Data.Context.DataContext";
        }

        protected override void Seed(LearningTypeScript.Data.Context.DataContext context)
        {
            var SeedProducts = new List<Product>
            {
                new Product {Id=2, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=3, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=4, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=1, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=5, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=6, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=7, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=8, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" },
                new Product {Id=9, Code="Test", DateCreated=DateTime.Now, IsActive=true, Name="Test 1" }
            };
            int invItemId = 0;
            SeedProducts.ForEach(p => 
            {
                //add one Item
                invItemId++;
                var item = new InventoryItem { Id = invItemId, DateCreated = DateTime.Now, BuyInPrice = 1.99M, IsActive = true, Quantity = 3, ProductId = p.Id };

                p.InventoryItems.Add(item);
                //attach to context
                context.Products.AddOrUpdate(p);
            });
            //remember to save
            context.SaveChanges();
            
        }
    }
}
