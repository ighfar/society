var kandangConfig = function ($stateProvider,$urlRouterProvider){
	var myState = {
		login: {
			name: 'login',
			url: '/',
			templateUrl:'template/login.html',
			controller:'loginCtrl'
		},
		app: {
			name:'app',
			url:'/app',
			controller:'appCtrl',
			templateUrl:'template/app.html'
		},
		list: {
			name:'app.list',
			url:'/list',
			templateUrl:'template/list.html',
			controller:'DombaListCtrl'
		},
		form: {
			name:'app.form',
			url:'/form',
			templateUrl:'template/form.html',
			controller:'formCtrl',
			params:{data:null}
		},
		provinsi: {
			name:'app.provinsi',
			url:'/provinsi',
			templateUrl:'template/provinsi.html',
			controller:'myprov'
		},
		forgot: {
			name:'forgot',
			url:'/forgot',
			templateUrl:'template/for.html',
			controller:'myfor'
		},
		register: {
			name:'register',
			url:'/register',
			templateUrl:'template/reg.html',
			controller:'myreg'
		}

	};

	$stateProvider
		.state(myState.login)		
		.state(myState.app)		
		.state(myState.list)		
		.state(myState.form)
		.state(myState.provinsi)
		.state(myState.forgot)
		.state(myState.register)


	$urlRouterProvider
		.otherwise("/")
}
angular.module("kandang")
.config(kandangConfig)