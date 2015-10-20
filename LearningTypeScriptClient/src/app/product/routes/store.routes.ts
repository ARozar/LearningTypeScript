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
              controllerAs: 'vm'
            }).state('product', {
              url: '/product/:id',
              controller: inventoryApp.store.ProductController,
              controllerAs: 'vm',
              abstract: true,
              template: '<ui-view/>'
            }).state('product.details', {
              url: '/Details',
              controller: inventoryApp.store.ProductController,
              controllerAs: 'vm',
              templateUrl: 'app/product/views/product-details.html'
            });
        }
    }
    angular.module('inventoryApp').config(RouterConfig);
}