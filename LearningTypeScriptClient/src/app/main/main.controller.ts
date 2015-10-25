module inventoryApp {
  'use strict';

  export class MainController {
    public classAnimation: string;

    /* @ngInject */
    constructor ($timeout: angular.ITimeoutService, toastr: Toastr) {

      this.classAnimation = '';

      this.activate($timeout);
    }

    activate($timeout: angular.ITimeoutService) {


      var self = this;

      $timeout(function() {
        self.classAnimation = 'rubberBand';
      }, 4000);
    }

    showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      this.classAnimation = '';
    }


  }
}
