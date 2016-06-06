var node_mysql_connection = require("../node_mysql_connection");
var connection = node_mysql_connection.mysql_connection;

exports.getActions = function(req, res){

 
  
};


exports.getLastActions = function(req, res){

	var actions = [];
	/*
	var request = "SELECT A.id, A.fk_item_id as item_id, A.fk_task_id as task_id, \
				A.fk_user_id as user_id, A.fk_state_id as state_id, A.comment, \
				max(A.creation_date) as date_last_modif, \
				U.firstname as user_name, U.login as user_login, S.name as state_name, \
				S.class_name as state_class \
				FROM action A \
				LEFT JOIN user U ON A.fk_user_id = U.id \
				LEFT JOIN state S ON A.fk_state_id = S.id \
				GROUP BY A.fk_task_id, A.fk_item_id \
				";
	*/
	var request = "SELECT A.id, A.fk_item_id as item_id, A.fk_task_id as task_id, A.fk_user_id as user_id, A.fk_state_id as state_id, A.comment, 			\
				A.creation_date as date_last_modif, U.firstname as user_name, U.login as user_login, S.name as state_name, S.class_name as state_class 	\
				FROM action A 																															\
				LEFT JOIN user U ON A.fk_user_id = U.id 																								\
				LEFT JOIN state S ON A.fk_state_id = S.id 																								\
				WHERE A.creation_date = (SELECT MAX(A2.creation_date) FROM action A2 WHERE A2.fk_item_id = A.fk_item_id AND A2.fk_task_id = A.fk_task_id)";
				
	connection.query(request, function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		for(var i=0; i < rows.length; i++)
		{
			if(Array.isArray(actions[rows[i].task_id]) !== true)
		    {
		    	actions[rows[i].task_id] = [];
		    }

		    actions[rows[i].task_id][rows[i].item_id] = rows[i];
		}

		res.send(actions);

	});

};