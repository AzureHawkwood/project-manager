'use strict';

angular.module('projectManagerApp')
	.controller('ReorderController', function ($scope, $cookies, $location, AjaxFactory) {
	
	$scope.pageClass = 'page-reorder';

	
	$scope.initReorder = initReorder;
	
	$scope.tasks = [];
	$scope.items = [];

	$scope.initReorder();
	
	

	$scope.go = function(path){
		$location.path(path);
	};

	
	function initReorder(){
		
		updateManagerTasks();
		updateManagerItems();


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

