'use strict';

angular.module('projet7AlbumManagerApp')
	.controller('ItemController', function ($scope, $routeParams, $location, AjaxFactory) {
	
	$scope.item_id = "";

	if(typeof $routeParams.id !== "undefined") {
		$scope.item_id = $routeParams.id;
	}

	$scope.original_item_name = "";
	$scope.item_name = "";

	$scope.initManager = initManager;

	$scope.initManager();
	
	$scope.go = function(path){
		$location.path(path);
	};

	$scope.updateItem = function(form){
		if(form.$valid) {

			var data = { 
				item_id: $scope.item_id,
				item_name: $scope.item_name
			};

			AjaxFactory.updateItem(data).then(function successCallback(response) {
				$scope.original_item_name = $scope.item_name;
				$location.path("/");
		 	}, function errorCallback(response) {
			    console.log("Erreur d'ajout de données updateItem");
		  	});
		}
	};
	$scope.removeItem = function(){
		if(confirm("Êtes-vous certain de vouloir supprimer définitivement ce morceau ?")) {
			
			var data = { 
				item_id: $scope.item_id
			};

			AjaxFactory.removeItem(data).then(function successCallback(response) {
				$location.path("/");
		 	}, function errorCallback(response) {
			    console.log("Erreur de suppression de données removeItem");
		  	});
		}
	};


	function initManager(){

		AjaxFactory.getItem($scope.item_id).then(function successCallback(response) {
			if(angular.isArray(response.data) && response.data.length > 0)
			{
				$scope.original_item_name = response.data[0].name;
				$scope.item_name = $scope.original_item_name;
			}
			else
			{
				$location.path("/404");
			}
	 	}, function errorCallback(response) {
	 		$location.path("/404");
		    console.log("Erreur de récupération des données de getItem");
	  	});


	};

});

