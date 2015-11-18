module inventoryApp.user {
	"use strict";

	export interface IUserService {
		registerUser(loginModel: LoginVm): angular.IHttpPromise<any>;
		login(loginModel: LoginVm): angular.IHttpPromise<User>;
		getCurrentUser(): User;
		setCurrentUser(user: User): void;
	}
	
	class UserService implements IUserService{
		
		private currentUser: User;

		constructor(private $http: angular.IHttpService, private appSettings: inventoryApp.IAppSettings) {

		}
		registerUser(loginModel: LoginVm): angular.IHttpPromise<any> {
			var requestConfig: angular.IRequestConfig = {
				url: this.appSettings.baseUrl + "/api/Account/Register",
				method: 'POST',
				data: loginModel
			};

			return this.$http(requestConfig);
		}

		login(loginModel: LoginVm): angular.IHttpPromise<User> {

			var requestConfig: angular.IRequestConfig = {
				url: this.appSettings.baseUrl + "/Token",//make sure we hit ApplicationOAuthProvider
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//we can't send json
				transformRequest: function(data, headersGetter) {
					var str: Array<string> = [];
					//go through object keys and form encode keys and value
					for (var d in data)
						str.push(encodeURIComponent(d) + "=" +
							encodeURIComponent(data[d]));
					return str.join("&")+"&grant_type=password";
				},
				data: loginModel
			};

			return this.$http(requestConfig);
		}
		
		getCurrentUser(): User{
			return this.currentUser;
		}
		
		setCurrentUser(user: User): void{
			this.currentUser = user;
		}
	}
	userServiceFactory.$inject = ['$http','appSettings'];
	function userServiceFactory($http: angular.IHttpService, appSettings: inventoryApp.IAppSettings){
		return new UserService($http,appSettings);
	}
	
	angular.module('inventoryApp').factory('UserService',userServiceFactory);
}