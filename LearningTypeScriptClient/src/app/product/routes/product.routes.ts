module inventoryApp.product {
    'use strict';

  class RouterConfig {
    /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
          $stateProvider
            .state('products', {
              url: '/products',
              templateUrl: 'app/product/views/product-list.html',
              controller: inventoryApp.product.ProductListController,
              controllerAs: 'vm',
              resolve:{
                products: productsResolver
              }
            }).state('product', {
              url: '/product/:id',
              controller: inventoryApp.product.ProductController,
              controllerAs: 'vm',
              abstract: true,
              template: '<ui-view/>',
              resolve: {
                product: productResolver
              }
            })
            .state('product.details', {
              url: '/Details',
              controller: inventoryApp.product.ProductController,
              controllerAs: 'vm',
              templateUrl: 'app/product/views/product-details.html'
            }).state('product.create', {
              url: '/Create',
              controller: inventoryApp.product.ProductController,
              controllerAs: 'vm',
              templateUrl: 'app/product/views/product-create.html'
            }).state('product.delete', {
              url: '/Delete',
              controller: inventoryApp.product.ProductController,
              controllerAs: 'vm',
              templateUrl: 'app/product/views/product-delete.html'
            });
        }
    }
    
    productsResolver.$inject = ['productResource'];
    function productsResolver(productResource: IProductResource){
          return productResource.query().$promise;
    }
    
    productResolver.$inject = ['productResource','$stateParams','$q'];
    function productResolver(productResource: IProductResource, $stateParams: ng.ui.IStateParamsService,$q :angular.IQService){
      
      var id = $stateParams['id'];
      //new 
      if(id==='0'){
        var promise = $q.defer();
        promise.resolve(new productResource());
        return promise.promise;
      }else{
      //update of existing product
        return productResource.get({productId:id}).$promise
      }
      
          
    }
    
    angular.module('inventoryApp').config(RouterConfig);
}