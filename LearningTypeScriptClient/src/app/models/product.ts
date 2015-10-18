module inventoryApp.models {
    export interface IProduct {
        productId: number;
        name: string;
		code: string;
    }

    export class Product implements IProduct {

		constructor(public productId: number,
					public name: string,
					public code: string) {
		}
	}
}
