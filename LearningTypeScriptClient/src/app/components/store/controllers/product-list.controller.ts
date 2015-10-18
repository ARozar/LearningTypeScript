module inventoryApp.store {

     /*@ngInject*/
     export class ProductListController {

          constructor(private $http: angular.IHttpService) {

                $http(<angular.IRequestConfig>{
    url: 'api/products/',
    method: 'GET',
    dataType: 'json'})
        .then((products: Array<inventoryApp.models.Product>) => {
                    console.log(products);
                });
           }
     }
}
