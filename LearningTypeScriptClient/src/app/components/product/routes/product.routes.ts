module inventoryApp.Product {
    'use strict';

   class RouterConfig {
    /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
          $stateProvider
            .state('product', {
              url: '/product',
              templateUrl: 'app/components/product/views/product-list.html',
              controller: 'ProductController',
              controllerAs: 'vm'
            });
        }
    }
    angular.module('inventoryApp').config(RouterConfig);
}
