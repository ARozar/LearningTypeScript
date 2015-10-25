module inventoryApp {
    'use strict';
	//create interface to represent the factory object that the
	//injector will provide to the rest of the app
    export interface IAppSettings {
        baseUrl: string;
    }
	//implement the interface
	class AppSettings implements IAppSettings {
		public baseUrl;
		
		constructor(){
			this.baseUrl = '';
		}
	}
	//interface to define this specific provider as it will appear in the config phase
    export interface IAppSettingsProvider  extends angular.IServiceProvider {
        configure(baseUrl: string): void;
    }

    class AppSettingsProvider implements IAppSettingsProvider {
        private config: IAppSettings;

		constructor(){
			this.config = new AppSettings();
		}
        configure(baseUrl: string): void {
           this.config.baseUrl = baseUrl;
        }

        $get(): IAppSettings {
            return this.config;
        }
    }

    angular
        .module('inventoryApp')
        .provider('appSettings', AppSettingsProvider);
}