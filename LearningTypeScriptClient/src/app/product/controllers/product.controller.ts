module inventoryApp.product {

    export interface IProductController {
        createOrUpdate(): void;
        delete(): void;
    }

    export class ProductController implements IProductController {

        constructor(public product: inventoryApp.models.IApiProduct,//from resolver
        public productResource: IProductResource,
        private toastr: Toastr) {

        }

        createOrUpdate(): void {
            //create
            if (typeof this.product.id === 'undefined') {
                this.product.$save()
                    .then(() => {
                        this.toastr.success("Sucessfully created product.");
                    });
            //update
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