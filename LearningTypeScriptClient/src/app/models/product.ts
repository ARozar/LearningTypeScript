module inventoryApp.models {
    export interface IProduct {
        id: number;
        name: string;
		code: string;
		stock: number
    }
	

    
    export interface IApiProduct extends angular.resource.IResource<IProduct>, IProduct{
    	
    }

    export class Product implements IProduct {

		constructor(public id: number,
					public name: string,
					public code: string,
					public stock: number) {
		}
	}
}