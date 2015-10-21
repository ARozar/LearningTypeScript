module inventoryApp.store {

     /*@ngInject*/
     export class ProductListController {

        public products: Array<inventoryApp.models.IProduct>;

        constructor(private productResource: IProductResource) {
            this.products = new Array<inventoryApp.models.IProduct>();
            
            productResource.query((data: Array<inventoryApp.models.IApiProduct>)=> {
                this.products = data;
            });
            // todo move into resolver and maybe use $resource
            // $http(<angular.IRequestConfig>{
            // url: 'https://andrewlearningtypescript.azurewebsites.net/products',
            // method: 'GET',
            // dataType: 'json'})
            //     .then((result: angular.IHttpPromiseCallbackArg<Array<inventoryApp.models.IProduct>>) => {
            //                 this.products = result.data;
            //                 console.log(this.products);
            //             });               
        }
        
    }
}