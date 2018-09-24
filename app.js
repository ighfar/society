var myController = function ($scope,$localStorage, $state){

}

var appCtrl = function($scope, $localStorage, $state){
		if($localStorage.user){
		$scope.name = $localStorage.user.name
	}
	$scope.logout = function ( ){
		$localStorage.$reset()
		$state.go("login")
	}
}

var loginCtrl = function($scope, $state,$http, url, $localStorage){
			$scope.nohp="";
			$scope.email="";
		$scope.password="";
		
		$scope.form = { };

	$scope.login = function(){
		$http.post(url + "/auth/login", $scope.form).then(function(res){
			console.log(res.data)
			$localStorage.user = res.data;
			$state.go('app.list');
		}, function(res){
			console.log(res)
			alert(res.data.message)
		})
	}
	$scope.forgot= function (){
		$state.go("forgot")
	}
	$scope.register= function (){
		$state.go("register")
	}
}


var myreg = function ($scope, $state){
		$scope.fullName="";
		$scope.password="";
		$scope.retypePassword="";
		$scope.email="";
		$scope.cancel = function(){
			$state.go("login")
		}
		$scope.alerts = [

		]
		  $scope.addAlert = function() {
		  	if ($scope.fullName==="") {
		  		$scope.alerts.push({msg: 'Nama Belum terisi !'});
		  	} 
			else {

			}
			if ($scope.nohp==="") {
		  		$scope.alerts.push({msg: 'Nomor HP Berlum terisi !'});
		  	} 
			else {

			}

			if ($scope.password==="") {
		  		$scope.alerts.push({msg: 'Password Berlum terisi !'});
		  	} 
			else {

			}

			if ($scope.norumah==="") {
		  		$scope.alerts.push({msg: 'Nomor Rumah Belum terisi !'});
		  	} 
		  	else
		  }
			if ($scope.noref==="") {
		  		$scope.alerts.push({msg: 'Nomor Referensi Belum terisi !'});
		  	} 
		  		  else
		  		}
			if ($scoe.email==="") {
		  		$scope.alerts.push({msg: 'E-mail Belum terisi !'});
		  	} 
				
				else {
					
				}
			}

			if ($scope.nama !=="" && $scope.nohp !=="" && $scope.password !=="" && $scope.email!=="") {
				$scope.alerts.push({msg: 'Register anda berhasil'});
				} 
				else {

				}
			

			

		  	
			
		}
  		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
	  };
}

var myfor = function ($scope, $state){
		$scope.email="senoapri52@gmail.com";
		$scope.cancel = function(){
			$state.go("login")
		}
		$scope.alerts = [

		]
		  $scope.addAlert = function() {
		  	if ($scope.email==="senoapri52@gmail.com") {
		  		$scope.alerts.push({msg: 'Selamat E-mail anda berhasil di reset'});
		  	} else {
		  	if ($scope.email===""){
		  		 $scope.alerts.push({msg: 'isi E-mail terlebih dahulu !'});
		  	}
			else {
			  	 $scope.alerts.push({msg: $scope.email  + ' tidak di temukan dalam data base kami!'});
			  	}
		  	}
			
		}
  		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
	  };
}


angular.module('kandang', ["ui.router", "ngStorage", 'ui.bootstrap'])
.constant("url", "http://192.168.100.8:8301")
.controller('loginCtrl', loginCtrl)
.controller('appCtrl', appCtrl)
.controller('my-controller',myController)
.controller('myfor',myfor)
.controller('myreg',myreg);