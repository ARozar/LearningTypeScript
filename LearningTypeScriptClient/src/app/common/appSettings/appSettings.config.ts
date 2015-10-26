module inventoryApp {
	'use strict';

    angular
        .module('inventoryApp')
        .config(config);

    //use provider suffix for config phase
	config.$inject = ['appSettingsProvider'];
    function config(
        appSettings: inventoryApp.IAppSettingsProvider): void {//reference provider interface
        //appSettings.configure('https://andrewlearningtypescript.azurewebsites.net');
    }
}