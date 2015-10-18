module app.shared {

    var mockResource = angular
        .module('productResourceMock',
            ['ngMockE2E']);

    mockResource.run(mockRun);

    mockRun.$inject = ['$httpBackend'];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var products: app.models.IProduct[] = [];
        var product: app.models.IProduct;

        product = new app.models.Product(1, "Motherboard", "GLA0021");
        products.push(product);

        product = new app.models.Product(2, "8 GB RAM", "GLA0023");
        products.push(product);

        product = new app.models.Product(3, "256 SSD HD", "GLA0002");
        products.push(product);

        product = new app.models.Product(4, "Lenovo laptop", "GLA0048");
        products.push(product);

         product = new app.models.Product(5, "15.4\" TFT", "GLA0042");
        products.push(product);

        var productUrl = "/api/products";

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method: string, url: string, data: string) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id: number = <number> parseInt(parameters[length - 1], 10);

            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId === id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        // catch all
        $httpBackend.whenGET(/api/).respond(function(method: string, url: string, data: string) {
            return [200, products, {}];
        });

        // pass through any requests for application files as we are not doing unit tests
        $httpBackend.whenGET(/app/).passThrough();
    }
}
