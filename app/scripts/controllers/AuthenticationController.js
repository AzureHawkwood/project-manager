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

    $scope.error_login = false;
    $scope.error_message = "";

  	$scope.loginFunction = function(form){
  		
      if(form.$valid) {

        var data = { 
          login: $scope.user.login,
          password: $scope.user.password
        };

        AjaxFactory.login(data).then(function successCallback(response) {
          
            if(response)
            {
              $scope.error_login = response.data.error;
              $scope.error_message = response.data.message;

              if($scope.error_login === false)
              {
                window.location.href = "/";
              }
            }
            

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
          if(response)
          {
            $scope.error_login = response.data.error;
            $scope.error_message = response.data.message;

            if($scope.error_login === false)
            {
              window.location.href = "/";
            }
          }
        }, function errorCallback(response) {
          console.log("Erreur lors du register");
        });
      }
  	}



  	$scope.goFromName = function (path) {
  		$location.path(namedRouteService.reverse(path));
  	};
    $scope.go = function (path) {
      $location.path(path);
    };

  });
