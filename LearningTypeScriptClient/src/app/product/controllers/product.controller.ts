module inventoryApp.store {
    
    export interface IProductController {
        create(): void;
        update(): void;
    }
    
    export class ProductController implements IProductController {
        
        constructor(public product: inventoryApp.models.IApiProduct, public productResource: IProductResource, private toastr: Toastr){

        }
        
        create(): void {
            
        }
        
        update():void {
            this.productResource.update({id: this.product.id},this.product)
            .$promise.then(()=>{
                this.toastr.success("Sucessfully update product details.");
            });
            
        };
    }
    
    angular.module('inventoryApp').controller('ProductController',ProductController);
    
}