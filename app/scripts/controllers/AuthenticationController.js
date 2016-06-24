'use strict';

/**
 * @ngdoc function
 * @name projet7AlbumManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projet7AlbumManagerApp
 */
angular.module('projectManagerApp')
  .controller('AuthenticationController', function ($scope, $cookies, $location, namedRouteService, AjaxFactory) {
    
    $scope.pageClass = 'page-authentication';

    //Première chose à faire, on supprime tout cookie pouvant correspondre à un utilisateur
    $cookies.remove('user');

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
                $cookies.putObject('user', response.data.user);
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
          
          if(response)
          {
            $scope.error_login = response.data.error;
            $scope.error_message = response.data.message;

            if($scope.error_login === false)
            {
              $cookies.putObject('user', response.data.user);
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
