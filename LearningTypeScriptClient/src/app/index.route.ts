module inventoryApp {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
          });
        // .state('product', {
        //   url: '/product',
        //   template: 'Hello',
        //   controller: 'ProductController',
        //   controllerAs: 'vm'
        // });

      $urlRouterProvider.otherwise('/');
    }

  }
}
