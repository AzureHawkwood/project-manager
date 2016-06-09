'use strict';

angular.module('projet7AlbumManagerApp')
	.controller('ManagerController', function ($scope, $location, AjaxFactory) {
	
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


/*
	Même lors d'un appel à la fonction dans le contrôleur suite à un : 
	$scope.init = function (){
		//angular.element(document).ready(function () { ...	});
	};
	cela s'exécute avant les directives ng-repeat
	
	function initManagerJQEvents(){
	
	
		//Cela fonctionne pour le row sorter, je ne sais pas pourquoi
		//même si le tableau n'a pas terminé de se construire à partir du ng-repeat,
		//le rowSorter fonctionne quand même, probablement attache-il les événements
		//sur la tableau et non directement sur les lignes td/tr ?
		
		$("#managerContainerTable").rowSorter({

			handler         : 'th .move-vertical',
			stickTopRows    : 1,
			stickBottomRows : 1,
			onDragStart: function(tbody, row, index){
		        //console.log('start index is ' + index);
		    },
		    onDrop: function(tbody, row, new_index, old_index){
		        //console.log('sorted from ' + old_index + ' to ' + new_index);
		    }
		});

		//En revanche, le dragtable utilisé pour réordonner les colonnes ne marche pas, 
		//avec angular, la page se charge, les événements sont lancés, et seulement ensuite,
		//le ng-repeat tourne, ce qui fait que les colonnes ne sont pas encore chargées.
		//A la place, on va créer des directives qui se lanceront uniquement lorsque les derniers
		//éléments des ng-repeat seront insérés
		$('#managerContainerTable').dragtable({
			dragHandle:'.move-horizontal',			//point de clic où l'on autorise le drag
			dragaccept:'.move-horizontal-accept',	//colonnes acceptées dans le drag
			clickDelay:0,	//délai à partir duquel le drag commence
			distance:0,		//distance à partir de laquelle le drag commence	
			revert: true,	//permet de faire l'anim de la colonne qui se replace bien
			exact: false,	//IMPORTANT, ça casse le css sinon
			containment: '#managerContainer',
		 	beforeStart: function(){       
		    },
			beforeMoving: function(){       
		    },
			beforeReorganize: function(){       
		    },
			beforeStop: function(){       
		    }

		});
	}
*/