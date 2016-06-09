var node_mysql_connection = require("../node_mysql_connection");
var connection = node_mysql_connection.mysql_connection;

exports.getTask = function(req, res, next){

	var task_id = 0;
	if(Number.isFinite(parseInt(req.params.task_id)))
	{
		task_id = parseInt(req.params.task_id);

	    connection.query('SELECT * FROM task WHERE id=?', [task_id], function(err, rows) {
		 	if (err) {
				console.log("Error Selecting : %s ",err );
			 	throw err;
			}
			
//			if(rows.length > 0)
//			{
				res.send(rows);
//			}
//			else
//			{
				//res.status(404).send({ error: 'Pas de résultat pour ce paramètre' });
//				res.redirect('/404');
//			}
			

		});
	}
	else
	{
		//res.status(404).send({ error: 'Mauvais paramètre' });
		res.redirect('/404');
	}

};

exports.getTasks = function(req, res, next){

    connection.query('SELECT * FROM task WHERE visible=1 ORDER BY task_order asc', function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		res.send(rows);

		
	});
};





exports.task = function(req, res, next){

	if(req.method === "POST")
	{

		var task_name = req.body.name.trim();
		var user_id = 1;
		var task_order =  0;


		connection.query('SELECT MAX(task_order) as max_order FROM task WHERE visible=1', function(err, rows) {
		 	if (err) {
				console.log("Error Selecting : %s ",err );
			 	throw err;
			}

			task_order = rows[0].max_order + 1;
			
			var request = "INSERT INTO task SET last_modification=NOW(), ?";
			var fields = {  
							name: task_name,
							task_order: task_order,
							fk_user_id: user_id,
							visible: 1
						};

			connection.query(request, fields, function(err){
			 	if (err) {
					console.log("Error Inserting : %s ",err );
				 	throw err;
				}

				res.send({success : "Inserted Successfully", status : 200});
			});

		});

	}
	else if(req.method === "PUT")
	{
		if(Number.isFinite(parseInt(req.body.task_id)))
		{
			var task_id = parseInt(req.body.task_id);
			var task_name = req.body.task_name.trim();
			var user_id = 1;


			connection.query('UPDATE task SET last_modification=NOW(), name=?, fk_user_id=? WHERE id=?', [task_name, user_id, task_id], function (err, result) {
				if (err) {
					console.log("Error Updating : %s ",err );
				 	throw err;
				}

				res.send({success : "Updated Successfully", status : 200});

			});
		}
		else
		{
			res.redirect('/404');
		}
	}
	else if(req.method === "DELETE")
	{
		if(Number.isFinite(parseInt(req.body.task_id)))
		{
			var task_id = parseInt(req.body.task_id);
			var user_id = 1;


			connection.query('UPDATE task SET last_modification=NOW(), visible=0, fk_user_id=? WHERE id=?', [user_id, task_id], function (err, result) {
				if (err) {
					console.log("Error Updating : %s ",err );
				 	throw err;
				}

				res.send({success : "Deleted Successfully", status : 200});

			});
		}
		else
		{
			res.redirect('/404');
		}
	}
	else
	{
		res.redirect('/404');
	}
   
};



/*
exports.addTask = function(req, res){


	var task_name = req.body.name.trim();
	var user_id = 1;
	var task_order =  0;


	connection.query('SELECT MAX(task_order) as max_order FROM task WHERE visible=1', function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		task_order = rows[0].max_order + 1;
		
		var request = "INSERT INTO task SET last_modification=NOW(), ?";
		var fields = {  
						name: task_name,
						task_order: task_order,
						fk_user_id: user_id,
						visible: 1
					};

		connection.query(request, fields, function(err){
		 	if (err) {
				console.log("Error Inserting : %s ",err );
			 	throw err;
			}
			
			res.send({success : "Inserted Successfully", status : 200});
		});

	});

};




exports.updateTask = function(req, res, next){

	console.log(req.method);

	if(Number.isFinite(parseInt(req.body.task_id)))
	{
		var task_id = parseInt(req.body.task_id);
		var task_name = req.body.task_name.trim();
		var user_id = 1;

		var data = {
			name: task_name,
			fk_user_id: user_id
		};

		con.query('UPDATE task SET last_modification=NOW(), ? Where id = ?', [data, task_id], function (err, result) {
			if (err) {
				console.log("Error Inserting : %s ",err );
			 	throw err;
			}

			res.send({success : "Inserted Successfully", status : 200});

		});
	}
	else
	{
		res.redirect('/404');
	}
	
};

exports.removeTask = function(req, res, next){

};

*/









