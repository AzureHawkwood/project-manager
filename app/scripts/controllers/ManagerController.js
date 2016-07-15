'use strict';

angular.module('projectManagerApp')
	.controller('ManagerController', function ($scope, $cookies, $location, AjaxFactory) {
	
	$scope.pageClass = 'page-manager';

	$scope.maxLengthStringToDisplay = 100;

	$scope.newTaskName = "";
	$scope.newItemName = "";
	$scope.initManager = initManager;
	
	$scope.tasks = [];
	$scope.items = [];
	$scope.actions = [];

	$scope.initManager();
	


	$scope.go = function(path){
		$location.path(path);
	};

	$scope.addTask = function(form){
		if(form.$valid) {
			
			var data = {
				task_name: $scope.newTaskName
			};
			
			AjaxFactory.addTask(data).then(function successCallback(response) {
				$scope.newTaskName = "";
				updateManagerTasks();
				$(".modal").modal("hide");
		 	}, function errorCallback(response) {
			    console.log("Erreur d'ajout de données addTask");
		  	});
		}
	};

	$scope.addItem = function(form){
		if(form.$valid) {

			var data = {
				item_name: $scope.newItemName
			};

			AjaxFactory.addItem(data).then(function successCallback(response) {
				$scope.newItemName = "";
		    	updateManagerItems();
		    	$(".modal").modal("hide");
		 	}, function errorCallback(response) {
			    console.log("Erreur d'ajout de données addItem");
		  	});
		}
	};
	
	function initManager(){
		
		updateManagerTasks();
		updateManagerItems();

		AjaxFactory.getLastActions().then(function successCallback(response) {
	    	$scope.actions = response.data;
	 	}, function errorCallback(response) {
		    console.log("Erreur de récupération des données de getLastActions");
	  	});

	};
	
	function updateManagerTasks(){
		AjaxFactory.getTasks().then(function successCallback(response) {
			$scope.tasks = response.data;
	 	}, function errorCallback(response) {
		    console.log("Erreur de récupération des données de getTasks");
	  	});
	}
	function updateManagerItems(){
		AjaxFactory.getItems().then(function successCallback(response) {
	    	$scope.items = response.data;
	 	}, function errorCallback(response) {
		    console.log("Erreur de récupération des données de getItems");
	  	});
	}
	

});
