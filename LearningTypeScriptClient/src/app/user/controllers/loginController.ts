module inventoryApp.user {
	'use strict'
	
	export interface ILogincontroller {
		login(loginVm: LoginVm): void
	}
	
	export class LoginController implements ILogincontroller{
		private name: string;
		private password: string;
		
		constructor(private UserService: IUserService, toastr: Toastr){
			
		}
		
		login(){
			var loginVm :LoginVm = { 
				UserName: this.name, 
				Password: this.password,
				ConfirmPassword: this.password
			}
			this.UserService.login(loginVm)
			.then((token: any)=>{console.log(token)})
			.catch((data)=>{console.log(data)});
		}
	}
	
	angular.module('inventoryApp').controller('LoginController',LoginController);
}