module inventoryApp.user {
   'use strict';

  class RouterConfig {
    /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
          $stateProvider
            .state('login', {
              url: '/login',
              templateUrl: 'app/user/views/login.html',
              controller: inventoryApp.user.LoginController,
              controllerAs: 'vm'
            }).state('register', {
              url: '/register',
              controller: inventoryApp.user.RegisterController,
              controllerAs: 'vm',
			        templateUrl:'app/user/views/register.html'
            });
        }
    }
    
    angular.module('inventoryApp').config(RouterConfig);
 
}