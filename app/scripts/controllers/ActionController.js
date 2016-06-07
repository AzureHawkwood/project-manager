'use strict';

angular.module('projet7AlbumManagerApp')
	.controller('ActionController', function ($scope, $routeParams, AjaxFactory) {

		$scope.task_id = 0;
		$scope.item_id = 0;
		$scope.state_id = 0;
		$scope.state_name = "";
		$scope.comment = "";

		$scope.states = [];
		$scope.comments = [];
		$scope.initManager = initManager;


		$scope.chooseState = function(state){
			$scope.state_id = state.id;
			$scope.state_name = state.name;
		}










		$scope.initManager();
		

		function initManager(){

			$scope.task_id = parseInt($routeParams.task_id);
			$scope.item_id = parseInt($routeParams.item_id);

			AjaxFactory.getStates().then(function successCallback(response) {
				$scope.states = response.data;
		 	}, function errorCallback(response) {
			    console.log("Erreur de récupération des données de getActions");
		  	});
			AjaxFactory.getComments($scope.task_id, $scope.item_id).then(function successCallback(response) {
				$scope.comments = response.data;
		 	}, function errorCallback(response) {
			    console.log("Erreur de récupération des données de getStates");
		  	});

			
			$scope.comments_history = [];

		};


});

