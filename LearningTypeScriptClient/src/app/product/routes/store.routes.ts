module inventoryApp.store {
    'use strict';

  class RouterConfig {
    /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
          $stateProvider
            .state('products', {
              url: '/products',
              templateUrl: 'app/product/views/product-list.html',
              controller: inventoryApp.store.ProductListController,
              controllerAs: 'vm',
              resolve:{
                products: productsResolver
              }
            }).state('product', {
              url: '/product/:id',
              controller: inventoryApp.store.ProductController,
              controllerAs: 'vm',
              abstract: true,
              template: '<ui-view/>',
              resolve: {
                product: productResolver
              }
            })
            .state('product.details', {
              url: '/Details',
              controller: inventoryApp.store.ProductController,
              controllerAs: 'vm',
              templateUrl: 'app/product/views/product-details.html'
            }).state('product.create', {
              url: '/Create',
              controller: inventoryApp.store.ProductController,
              controllerAs: 'vm',
              templateUrl: 'app/product/views/product-create.html'
            }).state('product.delete', {
              url: '/Delete',
              controller: inventoryApp.store.ProductController,
              controllerAs: 'vm',
              templateUrl: 'app/product/views/product-delete.html'
            });
        }
    }
    
    productsResolver.$inject = ['productResource'];
    function productsResolver(productResource: IProductResource){
          return productResource.query().$promise;
    }
    
    productResolver.$inject = ['productResource','$stateParams'];
    function productResolver(productResource: IProductResource, $stateParams: ng.ui.IStateParamsService){
          return productResource.get({productId:$stateParams['id']}).$promise
    }
    
    angular.module('inventoryApp').config(RouterConfig);
}