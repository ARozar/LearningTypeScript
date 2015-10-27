module inventoryApp.user {
	
	export class LoginVm {
		constructor(public UserName: string, 
		public Password: string,
		public ConfirmPassword: string){
			
		}
	}
}