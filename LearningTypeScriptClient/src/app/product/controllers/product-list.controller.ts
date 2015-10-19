module inventoryApp.store {

     /*@ngInject*/
     export class ProductListController {

            public products: Array<inventoryApp.models.IProduct>;

          constructor(private $http: angular.IHttpService) {
                this.products = new Array<inventoryApp.models.IProduct>();

                // todo move into resolver and maybe use $resource
                $http(<angular.IRequestConfig>{
                url: 'api/products/',
                method: 'GET',
                dataType: 'json'})
                    .then((result: angular.IHttpPromiseCallbackArg<Array<inventoryApp.models.IProduct>>) => {
                                this.products = result.data;
                                console.log(this.products);
                            });
                       }
                 }
}