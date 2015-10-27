module inventoryApp.user {
	
	export class LoginVm {
		constructor(public userName: string, 
		public password: string,
		public confirmPassword: string){
			
		}
	}
}