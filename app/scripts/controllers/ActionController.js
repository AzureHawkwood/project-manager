'use strict';

angular.module('projet7AlbumManagerApp')
	.controller('ActionController', function ($scope, $routeParams, AjaxFactory) {

		$scope.task_id = 0;
		$scope.item_id = 0;
		//On initialise la variable à null car il s'agit d'une dropdownlist bootstrap retravaillée
		//qui va alimenter un input hidden, donc cet input doit être en required et ne pas avoir
		//de valeur, tant que l'on a pas choisi une valeur dans la dropdownlist
		$scope.state_id = null;
		$scope.state_name = "";
		$scope.comment = "";

		$scope.states = [];
		$scope.comments = [];
		$scope.initManager = initManager;


		$scope.chooseState = function(state){
			$scope.state_id = state.id;
			$scope.state_name = state.name;
		};

		$scope.addAction = function(form){
			if(form.$valid) {
				var formData = {
					task_id: $scope.task_id,
					item_id: $scope.item_id,
					user_id: 1,
					state_id: $scope.state_id,
					comment: $scope.comment
				}
	            AjaxFactory.addAction(formData).then(function successCallback(response) {
					console.log("huhu bien ajouté");
			 	}, function errorCallback(response) {
				    console.log("Erreur d'exécution de addAction");
			  	});
	       	}
		};








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

