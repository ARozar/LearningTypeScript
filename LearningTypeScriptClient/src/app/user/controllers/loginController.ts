module inventoryApp.user {
	'use strict'
	
	export interface ILogincontroller {
		login(loginVm: LoginVm): void
	}
	
	export class LoginController implements ILogincontroller{
		constructor(private userService: IUserService, toastr: Toastr){
			
		}
		
		login(loginVm :LoginVm){
			
		}
	}
	
	angular.module('inventoryApp').controller('LoginController',LoginController);
}