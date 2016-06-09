'use strict';

angular.module('projet7AlbumManagerApp')
	.controller('TaskController', function ($scope, $routeParams, $location, AjaxFactory) {
	
	$scope.task_id = 0;

	if(Number.isFinite(parseInt($routeParams.id))) {
		$scope.task_id = $routeParams.id;
	}

	$scope.original_task_name = "";
	$scope.task_name = "";

	$scope.initManager = initManager;

	$scope.initManager();
	
	$scope.go = function(path){
		$location.path(path);
	};

	$scope.updateTask = function(form){
		if(form.$valid) {

			var data = { 
				task_id: $scope.task_id,
				task_name: $scope.task_name
			};

			AjaxFactory.updateTask(data).then(function successCallback(response) {
				$scope.original_task_name = $scope.task_name;
				//$location.path("/");
		 	}, function errorCallback(response) {
			    console.log("Erreur d'ajout de données updateTask");
		  	});
		}
	};
	$scope.removeTask = function(){
			
		var data = { 
			task_id: $scope.task_id
		};

		AjaxFactory.removeTask(data).then(function successCallback(response) {
			$location.path("/");
	 	}, function errorCallback(response) {
		    console.log("Erreur de suppression de données removeTask");
	  	});
	
	};

	function initManager(){


		AjaxFactory.getTask($scope.task_id).then(function successCallback(response) {
			if(angular.isArray(response.data) && response.data.length > 0)
			{
				$scope.original_task_name = response.data[0].name;
				$scope.task_name = $scope.original_task_name;
			}
			else
			{
				$location.path("/404");
			}
	 	}, function errorCallback(response) {
		    console.log("Erreur de récupération des données de getTask");
	  	});


	};

	

});
