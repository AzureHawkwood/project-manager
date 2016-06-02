'use strict';

/**
 * @ngdoc function
 * @name projet7AlbumManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projet7AlbumManagerApp
 */
angular.module('projet7AlbumManagerApp')
	.controller('ManagerController', function ($scope) {
	
	$scope.nbCol = 4;
	$scope.nbRow = 4;
	$scope.longText = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker";
	$scope.maxLengthStringToDisplay = 240;

	/*
	$scope.init = function (){
		//angular.element(document).ready(function () { ...	});
	};
	*/
	$scope.initManagerJQEvents = initManagerJQEvents;
	$scope.initManager = initManager;



	$scope.tasks = [];
	$scope.items = [];
	$scope.actions = [];


/*

	$scope.init = function (){
		angular.element(document).ready(function () { 
			$(document).ready(function(){
alert("huhu");
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
			});
		});
	};




$scope.init();
*/




	$scope.initManager();
	$scope.initManagerJQEvents();

/*
$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    //you also get the actual event object
    //do stuff, execute functions -- whatever...
    	alert("huhu");
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
});
*/

	$scope.ngRepeatFinished = function(){
		//alert("huhu");
/*	$('#managerContainerTable').dragtable({
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

		});*/
	};



	function initManager(){
		


	$scope.tasks = [
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
		];


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


	$scope.actions = [];


	}


	function initManagerJQEvents(){

		/*
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
*/

/*

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


*/

	}



});






angular.module('projet7AlbumManagerApp').directive("waitOnRowLoad", function(){

    return {

        restrict: 'A',

        scope:{},
        link: function(scope, element, attr){
        	
        	if (scope.$parent.$last) {
               
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

        }

    };

});




angular.module('projet7AlbumManagerApp').directive("waitOnLineLoad", function(){

    return {

        restrict: 'A',

       
        scope:{},
        link: function(scope, element, attr){
        	
        	if (scope.$parent.$last) {
               
				$("#managerContainerTable").rowSorter({

					handler         : 'th .move-vertical',
					stickTopRows    : 0,
					stickBottomRows : 1,
					onDragStart: function(tbody, row, index){
				        //console.log('start index is ' + index);
				    },
				    onDrop: function(tbody, row, new_index, old_index){
				        //console.log('sorted from ' + old_index + ' to ' + new_index);
				    }
				});

            }
		
        }

    };

});
