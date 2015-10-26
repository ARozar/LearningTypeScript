
module inventoryApp {
  'use strict';

  export class RunBlock {
    /** @ngInject */
    constructor($log: angular.ILogService, $rootScope: any) {
      $log.debug('runBlock end');
      
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                event.preventDefault();
                console.log(error);
            });
    }

  }
}
