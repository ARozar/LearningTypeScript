module inventoryApp.store {
    'use strict';

  class RouterConfig {
    /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
          $stateProvider
            .state('product', {
              url: '/product',
              templateUrl: 'app/components/store/views/product-list.html',
              controller: inventoryApp.store.ProductListController,
              controllerAs: 'vm'
            });
        }
    }
    angular.module('inventoryApp').config(RouterConfig).config(function($httpProvider: any) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
 });
}
