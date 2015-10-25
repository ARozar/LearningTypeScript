module inventoryApp.user {
	"use strict";

	export interface IUserService {
		registerUser(user: any): angular.IHttpPromise<any>;
		login(loginModel: any): angular.IHttpPromise<any>;
	}
	
	class UserService {

		constructor(private $http: angular.IHttpService, private appSettings: inventoryApp.IAppSettings) {

		}
		registerUser(user: any): angular.IHttpPromise<any> {
			var requestConfig: angular.IRequestConfig = {
				url: this.appSettings.baseUrl + "/api/Account/Register",
				method: 'POST',
				data: user
			};

			return this.$http(requestConfig);
		}

		login(loginModel: any): angular.IHttpPromise<any> {

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
					return str.join("&");
				},
				data: loginModel
			};

			return this.$http(requestConfig);
		}
	}
}