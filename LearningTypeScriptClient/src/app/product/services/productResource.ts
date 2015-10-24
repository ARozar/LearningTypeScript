module inventoryApp.store {
    
	export interface IProductResource extends angular.resource.IResourceClass<inventoryApp.models.IApiProduct> {
		update(id: any,product: inventoryApp.models.IApiProduct): inventoryApp.models.IApiProduct
    }

   export class ProductResource  {
       //Factory method that creates a strongly typed resource class
        public static ResourceClass($resource: angular.resource.IResourceService): IProductResource {
            var url = "https://andrewlearningtypescript.azurewebsites.net/products/:productId";
            
            var updateAction : angular.resource.IActionDescriptor = {
                method: 'PUT',
                isArray: false
            };        
            
            var resource: IProductResource = <IProductResource>$resource(url, {productId:'@id'},
            {
                update:updateAction
            });

            return  resource;
        }
    }
    
    angular.module('inventoryApp').factory('productResource',ProductResource.ResourceClass);
}