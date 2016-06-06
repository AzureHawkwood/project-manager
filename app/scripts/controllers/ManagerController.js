'use strict';

/**
 * @ngdoc function
 * @name projet7AlbumManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projet7AlbumManagerApp
 */
angular.module('projet7AlbumManagerApp')
	.controller('ManagerController', function ($scope, ManagerAjax) {
	
	$scope.nbCol = 4;
	$scope.nbRow = 4;
	$scope.longText = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker";
	$scope.maxLengthStringToDisplay = 240;

	
	$scope.initManager = initManager;

//alert("penser à changer le fonctionnement et trier à l'avance les données reçues en json, plutôt que d'utiliser le filter");

	$scope.tasks = [];
	$scope.items = [];
	$scope.actions = [];

	ManagerAjax.getTasks().then(function successCallback(response) {
	
	    if(angular.isArray(response.data))
	    {
	    	$scope.tasks = response.data;
	    }

 	}, function errorCallback(response) {

	    console.log( "Erreur de récupération des données de getTasks" );
		$scope.tasks = [];

  	});


	ManagerAjax.getItems().then(function successCallback(response) {
	
	    if(angular.isArray(response.data))
	    {
	    	$scope.items = response.data;
	    }

 	}, function errorCallback(response) {

	    console.log( "Erreur de récupération des données de getItems" );
		$scope.tasks = [];

  	});


	/*
	ManagerAjax.getTasks(function(data){
        $scope.tasks = data;

        console.log("huhu");
    });
*/

/*

			$http({
		        method : "GET",
		        url : "/getTasks",
		        data: {},
		    }).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log(response.data);
			    if(angular.isArray(response.data))
			    {console.log("hu");}
				else
				{console.log("ho");}
			    
			       $scope.tasks = response.data;
		 	}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log( "Erreur de récupération des données de getTasks" );
				return [];
		  	});

*/


/*
		    $http({
		        method : "GET",
		        url : "/getItems",
		        data: {},
		    }).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log(response.data);
			    if(angular.isArray(response.data))
			    {console.log("hu");}
				else
				{console.log("ho");}
			    
			       $scope.items = response.data;
		 	}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log( "Erreur de récupération des données de getTasks" );
				return [];
		  	});
*/

/*
	
    	$http({
	        method : "POST",
	        //url : "http://localhost/project_manager_php/task/getTasks.php",
	        url : "/get/getTasks",
	        data: {},
	    }).success(function(data, status) {
			$scope.tasks =  data;
		}).error(function(data, status) {
			console.log( "Erreur de récupération des données de getTasks " + data + " |||| " + status );
			$scope.tasks = [];
		});

*/




	$scope.initManager();
	

	function initManager(){
		
		/*$scope.tasks = [
			{	id: 1,
				name: "task 1",
				order: 1
			},
			{	id: 2,
				name: "task 2",
				order: 4
			},
			{	id: 3,
				name: "task 3",
				order: 3
			},
			{	id: 4,
				name: "task 4",
				order: 2
			},
			{	id: 5,
				name: "task 5",
				order: 5
			}
		];*/

/*
		$scope.items = [
			{	id: 1,
				name: "item 1",
				order: 1
			},
			{	id: 2,
				name: "item 2",
				order: 4
			},
			{	id: 3,
				name: "item 3",
				order: 3
			},
			{	id: 4,
				name: "item 4",
				order: 2
			},
			{	id: 5,
				name: "item 5",
				order: 5
			}
		];
*/
		/*
		$scope.actions = [
			1: {



			}, 2: {}, 3: {}];
		*/

		$scope.actions[1] = [];
		$scope.actions[2] = [];
		$scope.actions[3] = [];
		$scope.actions[4] = [];
		$scope.actions[5] = [];

		$scope.actions[1][1] = {
			id: 1,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[1][2] = {
			id: 2,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[1][3] = {
			id: 3,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "finished"
		};
		$scope.actions[1][4] = {
			id: 4,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[1][5] = {
			id: 5,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};


		$scope.actions[2][1] = {
			id: 6,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "started"
		};
		$scope.actions[2][2] = {
			id: 7,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[2][3] = {
			id: 8,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[2][4] = {
			id: 9,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "tostart"
		};
		$scope.actions[2][5] = {
			id: 10,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};

		$scope.actions[3][1] = {
			id: 11,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[3][2] = {
			id: 12,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[3][3] = {
			id: 13,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[3][4] = {
			id: 14,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[3][5] = {
			id: 15,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};

		$scope.actions[4][1] = {
			id: 16,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[4][2] = {
			id: 17,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[4][3] = {
			id: 18,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[4][4] = {
			id: 19,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[4][5] = {
			id: 20,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};

		$scope.actions[5][1] = {
			id: 21,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[5][2] = {
			id: 22,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[5][3] = {
			id: 23,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[5][4] = {
			id: 24,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};
		$scope.actions[5][5] = {
			id: 25,
			comment: "huhu commentaire",
			userName: "mon user",
			userLogin: "mon login",
			dateLastModif: "06/05/2016",
			stateClass: "undefined"
		};


	};

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