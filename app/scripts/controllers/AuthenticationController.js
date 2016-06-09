'use strict';

/**
 * @ngdoc function
 * @name projet7AlbumManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projet7AlbumManagerApp
 */
angular.module('projet7AlbumManagerApp')
  .controller('AuthenticationController', function ($scope, $location, namedRouteService) {
    
    $scope.huhu = "huhu";

  	$scope.login = function(){
  		alert("login");
  	}

  	$scope.register = function(){
  		alert("register");
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
