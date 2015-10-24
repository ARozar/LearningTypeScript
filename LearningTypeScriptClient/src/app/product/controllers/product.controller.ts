module inventoryApp.store {

    export interface IProductController {
        createOrUpdate(): void;
        delete(): void;
    }

    export class ProductController implements IProductController {

        constructor(public product: inventoryApp.models.IApiProduct, public productResource: IProductResource, private toastr: Toastr) {

        }

        createOrUpdate(): void {
            if (typeof this.product.id === 'undefined') {
                this.product.$save()
                    .then(() => {
                        this.toastr.success("Sucessfully created product.");
                    });
            } else {
                this.productResource.update({ id: this.product.id }, this.product)
                    .$promise.then(() => {
                        this.toastr.success("Sucessfully update product details.");
                    });
            }


        };

        delete(): void {
            this.product.$delete()
            .then(()=>{
                this.toastr.success("Sucessfully deleted product.");
            });
        };
    }

    angular.module('inventoryApp').controller('ProductController', ProductController);

}