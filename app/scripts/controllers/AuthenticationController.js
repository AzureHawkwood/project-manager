'use strict';

/**
 * @ngdoc function
 * @name projet7AlbumManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projet7AlbumManagerApp
 */
angular.module('projet7AlbumManagerApp')
  .controller('AuthenticationController', function ($scope, $location, namedRouteService, AjaxFactory) {
    
    
    $scope.user = { 
      login : "",
      firstname : "",
      password : "",
      password_bis : "",
      email : ""
    };


  	$scope.loginFunction = function(form){
  		
      if(form.$valid) {

        var data = { 
          login: $scope.user.login,
          password: $scope.user.password
        };

        AjaxFactory.login(data).then(function successCallback(response) {
          //$scope.original_item_name = $scope.item_name;
          //console.log("correctement loggué en tant que : "+response.data);
          console.log("correctement loggué");
          //$location.path("/");
        }, function errorCallback(response) {
          console.log("Erreur lors du loggin");
        });
      }
      else
      {
        console.log("form pas valide");
      }

  	}

  	$scope.registerFunction = function(form){
  		if(form.$valid) {
        
        var data = { 
          login: $scope.user.login,
          password: $scope.user.password,
          firstname: $scope.user.firstname,
          email: $scope.user.email
        };

        AjaxFactory.register(data).then(function successCallback(response) {
          //$scope.original_item_name = $scope.item_name;
          console.log("correctement enregistré en tant que : "+response.data);

          //$location.path("/");
        }, function errorCallback(response) {
          console.log("Erreur lors du register");
        });
      }
  	}

  	$scope.logout = function(){


  		alert("logout");

  		//Session.clear();
    	$location.path(namedRouteService.reverse('login'));


  	}

  	$scope.goFromName = function (path) {
  		$location.path(namedRouteService.reverse(path));
  	};
    $scope.go = function (path) {
      $location.path(path);
    };

  });
