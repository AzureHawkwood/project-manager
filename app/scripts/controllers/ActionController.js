'use strict';

angular.module('projectManagerApp')
	.controller('ActionController', function ($scope, $cookies, $routeParams, $location, AjaxFactory) {
		
		$scope.pageClass = 'page-action';

		$scope.task_id = "";
		$scope.item_id = "";
		//On initialise la variable à null car il s'agit d'une dropdownlist bootstrap retravaillée
		//qui va alimenter un input hidden, donc cet input doit être en required et ne pas avoir
		//de valeur, tant que l'on a pas choisi une valeur dans la dropdownlist
		$scope.state_id = null;
		$scope.state_name = "";
		$scope.comment = "";

		$scope.states = [];
		$scope.actions = [];
		$scope.initManager = initManager;

		$scope.cookie_user = $cookies.getObject('user');
		//$scope.huhu = $scope.cookie_user.local._id+"";

		$scope.chooseState = function(state){
			$scope.state_id = state._id;
			$scope.state_name = state.name;
		};

		$scope.go = function(path){
			$location.path(path);
		};

		$scope.addAction = function(form){
			if(form.$valid) {
				var formData = {
					task_id: $scope.task_id,
					item_id: $scope.item_id,
					state_id: $scope.state_id,
					comment: $scope.comment
				}
	            AjaxFactory.addAction(formData).then(function successCallback(response) {
					$scope.go("/");
			 	}, function errorCallback(response) {
				    console.log("Erreur d'exécution de addAction");
			  	});
	       	}
		};

		$scope.removeAction = function(action_id, array_index) {
			if(confirm("Êtes-vous certain de vouloir supprimer cette action ?")) {
				AjaxFactory.removeAction(action_id).then(function successCallback(response) {
					$scope.actions.splice(array_index, 1);
			 	}, function errorCallback(response) {
				    console.log("Erreur d'exécution de removeAction");
			  	});
			}
		}
		
		
		$scope.initManager();
		
		
		function initManager() {

			$scope.task_id = $routeParams.task_id;
			$scope.item_id = $routeParams.item_id;

			AjaxFactory.getStates().then(function successCallback(response) {
				$scope.states = response.data;
		 	}, function errorCallback(response) {
			    console.log("Erreur de récupération des données de getStates");
		  	});
			AjaxFactory.getActions($scope.task_id, $scope.item_id).then(function successCallback(response) {
				$scope.actions = response.data;
		 	}, function errorCallback(response) {
			    console.log("Erreur de récupération des données de getActions");
			    $scope.go("/404");
		  	});

		};


});

