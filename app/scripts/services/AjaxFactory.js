'use strict';

angular.module('projet7AlbumManagerApp')
  .factory('AjaxFactory', function ($http) {
    return{
        getTasks: function(){

		    return $http({
		        method : "GET",
		        url : "/getTasks",
		        data: {},
		    });

        },
        getItems: function(){

			return $http({
		        method : "GET",
		        url : "/getItems",
		        data: {},
		    });

        },
        getLastActions: function(){
            
            return $http({
		        method : "GET",
		        url : "/getLastActions",
		        data: {},
		    });

        },
        getStates: function(){
            
            return $http({
		        method : "GET",
		        url : "/getStates",
		        data: {},
		    });
		    
        },
        getComments: function(task_id, item_id){
            
            return $http({
		        method : "GET",
		        url : "/getComments/"+task_id+"/"+item_id,
		        data: {},
		    });
		    
        },
        addAction: function(data){
            console.log(data);
            return $http({
		        method : "POST",
		        url : "/addAction",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
				 }
		    });
		    
        },


        /*
        getItems: function(){

        	$http({
		        method : "POST",
		        url : "http://localhost/project_manager_php/item/getItems.php",
		        data: {},
		    }).success(function(data, status) {
				return data;
			}).error(function(data, status) {
				console.log( "Erreur de récupération des données de getItems" );
				return {};
			});

        },
        getLastActions: function(query, page){
            $http({
		        method : "POST",
		        url : "http://localhost/project_manager_php/action/getLastActions.php",
		        data: {},
		    }).success(function(data, status) {
				return data;
			}).error(function(data, status) {
				console.log( "Erreur de récupération des données de getLastActions" );
				return {};
			});
        },
        getActions: function(query, page){
            $http({
		        method : "POST",
		        url : "http://localhost/project_manager_php/action/getActions.php",
		        data: {},
		    }).success(function(data, status) {
				return data;
			}).error(function(data, status) {
				console.log( "Erreur de récupération des données de getActions" );
				return {};
			});
        },
        */



        /*
        getItems: function(query, page){
            return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
        },
        getTasks: function(query, page){
            return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
        },
        info: function(id){
            return $http.get("http://localhost:3000/info/" + id);
        },
        popular: function(page){
            return $http.get("http://localhost:3000/popular?page=" + page);
        }
        */
    }

  });