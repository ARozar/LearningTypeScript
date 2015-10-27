module inventoryApp.user {
	'use strict'
	
	export interface IRegisterController {
		register(): void
	}
	
	export class RegisterController implements IRegisterController{
		private name: string;
		private password: string;
		private confirmPassword: string;
		constructor(private UserService: IUserService, toastr: Toastr){
			
		}
		
		register(){
			var loginVm: LoginVm =  {
				userName: this.name,
				password: this.password,
				confirmPassword: this.confirmPassword
			};
			
			this.UserService.registerUser(loginVm)
			.then(()=>toastr.success('Congratulations on you registrations.'))
			.catch(error=> {console.log(error)});
		}
	}
	
	angular.module('inventoryApp').controller('RegisterController',RegisterController);
}