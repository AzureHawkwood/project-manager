var node_mysql_connection = require("../node_mysql_connection");
var connection = node_mysql_connection.mysql_connection;


exports.getLastActions = function(req, res){

/*
	var actions = [];
	
	var request = "SELECT A.id, A.fk_item_id as item_id, A.fk_task_id as task_id, A.fk_user_id as user_id, A.fk_state_id as state_id, A.comment, \
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

*/

var hu = [null,[null,null,{"id":43,"item_id":2,"task_id":1,"user_id":1,"state_id":4,"comment":"terminé !! super","date_last_modif":"2016-06-07T12:56:05.000Z","user_name":"franck","user_login":"azure","state_name":"Terminé","state_class":"finished"},null,{"id":52,"item_id":4,"task_id":1,"user_id":1,"state_id":3,"comment":"test","date_last_modif":"2016-06-07T13:04:21.000Z","user_name":"franck","user_login":"azure","state_name":"Commencé","state_class":"started"},null,null,{"id":77,"item_id":7,"task_id":1,"user_id":1,"state_id":4,"comment":"test ho","date_last_modif":"2016-06-07T14:03:03.000Z","user_name":"franck","user_login":"azure","state_name":"Terminé","state_class":"finished"},null,{"id":82,"item_id":9,"task_id":1,"user_id":1,"state_id":3,"comment":"Commencé","date_last_modif":"2016-06-09T07:19:15.000Z","user_name":"franck","user_login":"azure","state_name":"Commencé","state_class":"started"}],[null,null,{"id":26,"item_id":2,"task_id":2,"user_id":1,"state_id":2,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"A faire","state_class":"tostart"}],[null,null,{"id":27,"item_id":2,"task_id":3,"user_id":1,"state_id":2,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"A faire","state_class":"tostart"},null,null,{"id":50,"item_id":5,"task_id":3,"user_id":1,"state_id":2,"comment":"Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte Beaucoup de texte","date_last_modif":"2016-06-07T13:04:05.000Z","user_name":"franck","user_login":"azure","state_name":"A faire","state_class":"tostart"}],[null,null,{"id":28,"item_id":2,"task_id":4,"user_id":1,"state_id":4,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Terminé","state_class":"finished"}],[null,{"id":5,"item_id":1,"task_id":5,"user_id":1,"state_id":3,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Commencé","state_class":"started"},{"id":29,"item_id":2,"task_id":5,"user_id":1,"state_id":3,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Commencé","state_class":"started"},{"id":78,"item_id":3,"task_id":5,"user_id":1,"state_id":2,"comment":"à faire","date_last_modif":"2016-06-07T14:09:29.000Z","user_name":"franck","user_login":"azure","state_name":"A faire","state_class":"tostart"}],[null,{"id":6,"item_id":1,"task_id":6,"user_id":1,"state_id":1,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Undéfini","state_class":"undefined"},{"id":30,"item_id":2,"task_id":6,"user_id":1,"state_id":1,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Undéfini","state_class":"undefined"},null,{"id":42,"item_id":4,"task_id":6,"user_id":1,"state_id":2,"comment":"à commencer","date_last_modif":"2016-06-07T12:55:58.000Z","user_name":"franck","user_login":"azure","state_name":"A faire","state_class":"tostart"},null,{"id":83,"item_id":6,"task_id":6,"user_id":1,"state_id":3,"comment":"test56","date_last_modif":"2016-06-09T07:19:24.000Z","user_name":"franck","user_login":"azure","state_name":"Commencé","state_class":"started"}],[null,{"id":7,"item_id":1,"task_id":7,"user_id":1,"state_id":4,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Terminé","state_class":"finished"},{"id":31,"item_id":2,"task_id":7,"user_id":1,"state_id":1,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Undéfini","state_class":"undefined"}],[null,{"id":8,"item_id":1,"task_id":8,"user_id":1,"state_id":1,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Undéfini","state_class":"undefined"},{"id":32,"item_id":2,"task_id":8,"user_id":1,"state_id":3,"comment":"","date_last_modif":"2016-06-01T22:00:00.000Z","user_name":"franck","user_login":"azure","state_name":"Commencé","state_class":"started"}]];
res.send(hu);


};



exports.addAction = function(req, res){


	var task_id = parseInt(req.body.task_id);
	var item_id = parseInt(req.body.item_id);
	var user_id = 1;//parseInt(req.params.user_id);
	var state_id = parseInt(req.body.state_id);
	var comment = req.body.comment.trim();


	var request = "INSERT INTO action SET creation_date=NOW(), ?";
	var fields = {  
					fk_task_id: task_id,
					fk_item_id: item_id,
					fk_user_id: user_id,
					fk_state_id: state_id,
					comment: comment
				};

	connection.query(request, fields, function(err){
	 	if (err) {
			console.log("Error Inserting : %s ",err );
		 	throw err;
		}
		
		res.send({success : "Inserted Successfully", status : 200});
	});

};



exports.getActions = function(req, res){

	var task_id = parseInt(req.params.task_id);
	var item_id = parseInt(req.params.item_id);

	var request = "SELECT A.id, A.fk_item_id as item_id, A.fk_task_id as task_id, A.fk_user_id as user_id, A.fk_state_id as state_id, A.comment, \
				A.creation_date as date_last_modif, U.firstname as user_name, U.login as user_login, S.name as state_name, S.class_name as state_class \
				FROM action A \
				LEFT JOIN user U ON A.fk_user_id = U.id \
				LEFT JOIN state S ON A.fk_state_id = S.id \
				WHERE A.fk_task_id=? AND A.fk_item_id=? \
				ORDER BY A.creation_date DESC";
				
	connection.query(request, [task_id, item_id], function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		res.send(rows);

	});

};



exports.removeAction = function(req, res){


	var action_id = parseInt(req.body.action_id);

	var request = "DELETE FROM action WHERE id = ?";
	

	connection.query(request, [action_id], function(err){
	 	if (err) {
			console.log("Error Deleting : %s ",err );
		 	throw err;
		}
		
		res.send({success : "Deleted Successfully", status : 200});
	});

};