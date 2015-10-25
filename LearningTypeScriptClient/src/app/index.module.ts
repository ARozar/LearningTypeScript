/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />

declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;

module inventoryApp {
  'use strict';

  angular.module('inventoryApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar);
}
