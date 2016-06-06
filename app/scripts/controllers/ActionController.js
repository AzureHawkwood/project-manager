'use strict';

angular.module('projet7AlbumManagerApp')
	.controller('ActionController', function ($scope, $routeParams) {

		$scope.task_id = $routeParams;

		console.log($scope.task_id);
});

