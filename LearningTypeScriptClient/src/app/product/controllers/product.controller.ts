module inventoryApp.store {
    
    export class ProductController {
        public name: string;
        public code: string;
        
        constructor(public product: inventoryApp.models.IApiProduct){

        }
        
        update():void {
            alert('coming soon')
        };
    }
    
    angular.module('inventoryApp').controller('ProductController',ProductController);
    
}