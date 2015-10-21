module inventoryApp.store {
    
    export class ProductController {
        public name: string;
        public code: string;
        public product: inventoryApp.models.IApiProduct;
        
        constructor(private $stateParams: ng.ui.IStateParamsService,private productResource: IProductResource,private $http: angular.IHttpService){

            productResource.get({productId:$stateParams['id']}, (data: inventoryApp.models.IApiProduct)=> {
                this.product = data;

            }); 

        }
        
        update():void {
            alert('coming soon')
        };
    }
    
    angular.module('inventoryApp').controller('ProductController',ProductController);
    
}