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
            });
        }
    }
    angular.module('inventoryApp').config(RouterConfig);
}