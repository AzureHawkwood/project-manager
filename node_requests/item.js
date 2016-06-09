var node_mysql_connection = require("../node_mysql_connection");
var connection = node_mysql_connection.mysql_connection;


exports.getItem = function(req, res, next){

	var item_id = 0;
	if(Number.isFinite(parseInt(req.params.item_id)))
	{
		item_id = parseInt(req.params.item_id);
	}

    connection.query('SELECT * FROM item WHERE id=?', [item_id], function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		res.send(rows);

	});
};


exports.getItems = function(req, res, next){

    connection.query('SELECT * FROM item WHERE visible=1 ORDER BY item_order asc', function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		res.send(rows);

	});
};



exports.addItem = function(req, res){


	var item_name = req.body.name.trim();
	var user_id = 1;
	var item_order = 0;


	connection.query('SELECT MAX(item_order) as max_order FROM item WHERE visible=1', function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		item_order = rows[0].max_order + 1;
		
		var request = "INSERT INTO item SET last_modification=NOW(), ?";
		var fields = {  
						name: item_name,
						item_order: item_order,
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





exports.item = function(req, res, next){

	if(req.method === "POST")
	{

		var item_name = req.body.name.trim();
		var user_id = 1;
		var item_order =  0;


		connection.query('SELECT MAX(item_order) as max_order FROM item WHERE visible=1', function(err, rows) {
		 	if (err) {
				console.log("Error Selecting : %s ",err );
			 	throw err;
			}

			item_order = rows[0].max_order + 1;
			
			var request = "INSERT INTO item SET last_modification=NOW(), ?";
			var fields = {  
							name: item_name,
							item_order: item_order,
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
		if(Number.isFinite(parseInt(req.body.item_id)))
		{
			var item_id = parseInt(req.body.item_id);
			var item_name = req.body.item_name.trim();
			var user_id = 1;


			connection.query('UPDATE item SET last_modification=NOW(), name=?, fk_user_id=? WHERE id=?', [item_name, user_id, item_id], function (err, result) {
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
		if(Number.isFinite(parseInt(req.body.item_id)))
		{
			var item_id = parseInt(req.body.item_id);
			var user_id = 1;


			connection.query('UPDATE item SET last_modification=NOW(), visible=0, fk_user_id=? WHERE id=?', [user_id, item_id], function (err, result) {
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
