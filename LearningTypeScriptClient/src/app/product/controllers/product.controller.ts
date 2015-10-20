module inventoryApp.store {
    
    export class ProductController {
        public name: string = "Te";
        public code: string = "Te";
        
        constructor(private $stateParams: ng.ui.IStateParamsService,private $resource: any,private $http: angular.IHttpService){
            var productResource = $resource('https://andrewlearningtypescript.azurewebsites.net/products/:productId', {productId:'@id'});
            //TODO refactor into service
            // var product = productResource.get({productId:$stateParams['id']}, function(data) {
            //     this.name = ""//data.name;
            //     this.code = ""//data.code;
            // }); 
            $http(<angular.IRequestConfig>{
                url: 'https://andrewlearningtypescript.azurewebsites.net/products/'+$stateParams['id'],
                method: 'GET',
                dataType: 'json'
            })
                .then((result: angular.IHttpPromiseCallbackArg<inventoryApp.models.IProduct>) => {
                        this.name = result.data.name;
                        this.code = result.data.code;
                });
        }
        
        update():void {
            alert('coming soon')
        };
    }
    
    angular.module('inventoryApp').controller('ProductController',ProductController);
}