'use strict';

angular.module('projet7AlbumManagerApp')
  .factory('ManagerAjax', function ($http) {
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
        getActions: function(){
            $http({
		        method : "GET",
		        url : "/getActions",
		        data: {},
		    }).success(function(data, status) {
				return data;
			}).error(function(data, status) {
				console.log( "Erreur de récupération des données de getActions" );
				return {};
			});
        }



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