module inventoryApp.store {
    
    export class ProductController {
        public name: string;
        public code: string;
        public product: inventoryApp.models.IProduct;
        
        constructor(private $stateParams: ng.ui.IStateParamsService,private $resource: ng.resource.IResourceService,private $http: angular.IHttpService){
            var productResource = $resource('https://andrewlearningtypescript.azurewebsites.net/products/:productId', {productId:'@id'});
            //TODO refactor into service
            productResource.get({productId:$stateParams['id']}, (data: any)=> {
                this.code = data.code;
                this.name = data.name;
            }); 
            // $http(<angular.IRequestConfig>{
            //     url: 'https://andrewlearningtypescript.azurewebsites.net/products/'+$stateParams['id'],
            //     method: 'GET',
            //     dataType: 'json'
            // })
            //     .then((result: angular.IHttpPromiseCallbackArg<inventoryApp.models.IProduct>) => {
            //             this.name = result.data.name;
            //             this.code = result.data.code;
            //     });
        }
        
        update():void {
            alert('coming soon')
        };
    }
    
    angular.module('inventoryApp').controller('ProductController',ProductController);
    
      export interface IProductResource extends ng.resource.IResourceClass<inventoryApp.models.IApiProduct> {
  }
  
   export class Resource {
        public static Client($resource: ng.resource.IResourceService): IProductResource {
            var url = "https://andrewlearningtypescript.azurewebsites.net/products/:productId";
            
            var updateAction : angular.resource.IActionDescriptor = {
            method: 'PUT',
            isArray: false
            };        
            
            var resource = $resource(url, {productId:'@id'},
            {
                update:updateAction
            });

            return <IProductResource> resource;
        }
    }
}