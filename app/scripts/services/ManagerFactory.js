'use strict';

angular.module('projet7AlbumManagerApp')
  .factory('ManagerAjax', function ($http) {
    return{
        getTasks: function(){

        	$http({
		        method : "GET",
		        url : "/getTasks",
		        data: {},
		    })/*.then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available
			    console.log(response.data);
			    return response.data;
		 	}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log( "Erreur de récupération des données de getTasks" );
				return [];
		  	})*/;

        },
        getItems: function(){

        	$http({
		        method : "GET",
		        url : "/getItems",
		        data: {},
		    }).success(function(data, status) {
				return data;
			}).error(function(data, status) {
				console.log( "Erreur de récupération des données de getItems" );
				return [];
			});

        },
        getLastActions: function(){
            $http({
		        method : "GET",
		        url : "/getLastActions",
		        data: {},
		    }).success(function(data, status) {
				return data;
			}).error(function(data, status) {
				console.log( "Erreur de récupération des données de getLastActions" );
				return {};
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