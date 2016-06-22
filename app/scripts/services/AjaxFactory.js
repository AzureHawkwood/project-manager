'use strict';

angular.module('projectManagerApp')
  .factory('AjaxFactory', function ($http) {
    return{

    	/************************
		*	TASK
    	************************/
    	getTask: function(task_id){
		    return $http({
		        method : "GET",
		        url : "/task/"+task_id,
		        data: {},
		    });
        },
        getTasks: function(){
		    return $http({
		        method : "GET",
		        url : "/task",
		        data: {},
		    });
        },
        addTask: function(data){
            return $http({
		        method : "POST",
		        url : "/task",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },
        updateTask: function(data){
            return $http({
		        method : "PUT",
		        url : "/task",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },
        removeTask: function(data){
            return $http({
		        method : "DELETE",
		        url : "/task",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },

    	/************************
		*	ITEM
    	************************/
    	getItem: function(item_id){
		    return $http({
		        method : "GET",
		        url : "/item/"+item_id,
		        data: {},
		    });
        },
        getItems: function(){
			return $http({
		        method : "GET",
		        url : "/item",
		        data: {},
		    });
        },
        addItem: function(data){            
            return $http({
		        method : "POST",
		        url : "/item",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },
        updateItem: function(data){
            return $http({
		        method : "PUT",
		        url : "/item",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },
        removeItem: function(data){
            return $http({
		        method : "DELETE",
		        url : "/item",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },

    	/************************
		*	ACTION
    	************************/
    	getLastActions: function(){            
            return $http({
		        method : "GET",
		        url : "/getLastActions",
		        data: {},
		    });
        },
        getActions: function(task_id, item_id){            
            return $http({
		        method : "GET",
		        url : "/getActions/"+task_id+"/"+item_id,
		        data: {},
		    });		    
        },
        addAction: function(data){            
            return $http({
		        method : "POST",
		        url : "/addAction",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },
        removeAction: function(action_id){            
            return $http({
		        method : "POST",
		        url : "/removeAction",
		        data: {action_id: action_id},
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });		    
        },

    	/************************
		*	STATE
    	************************/
        getStates: function(){            
            return $http({
		        method : "GET",
		        url : "/getStates",
		        data: {},
		    });		    
        },
        

        /************************
		*	USER
    	************************/
        login: function(data){
            return $http({
		        method : "POST",
		        url : "/login",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });
        },
        register: function(data){
            return $http({
		        method : "POST",
		        url : "/register",
		        data: data,
		        headers: {
				   'Content-Type': "application/json"
			 	}
		    });
        }
      
    }

  });