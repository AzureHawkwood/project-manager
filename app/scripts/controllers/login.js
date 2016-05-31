'use strict';

/**
 * @ngdoc function
 * @name projet7AlbumManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projet7AlbumManagerApp
 */
angular.module('projet7AlbumManagerApp')
  .controller('LoginController', function ($scope, $location) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/

	$scope.go = function ( path ) {
		$location.path(path)
	};

  });
