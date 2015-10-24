module inventoryApp.store {

     /*@ngInject*/
     export class ProductListController {

        constructor(public products: Array<inventoryApp.models.IProduct>) {
           
            
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