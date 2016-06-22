'use strict';

/*
 * On va créer des directives qui serviront à lancer des événements d'une table draggable, on s'en sert
 * pour les exécuter une fois les directives angular ng-repeat de la table terminées
*/
angular.module('projectManagerApp').directive("waitOnColLoad", function(){
    return {
        restrict: 'A',
        scope:{},	//Important pour pouvoir récupérer le scope de l'élément dans la fonction link
        link: function(scope, element, attr){
        	//Si c'est le dernier élément du ng-repeat que l'on charge
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
angular.module('projectManagerApp').directive("waitOnRowLoad", function(){
    return {
        restrict: 'A',
        scope:{},	//Important pour pouvoir récupérer le scope de l'élément dans la fonction link
        link: function(scope, element, attr){
        	//Si c'est le dernier élément du ng-repeat que l'on charge
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
