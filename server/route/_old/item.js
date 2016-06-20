//var node_mysql_connection = require("../node_mysql_connection");
//var connection = node_mysql_connection.mysql_connection;

var node_mongo_connection = require("../node_mongo_connection");
var mongoose = node_mongo_connection.mongoose;
var Schema = node_mongo_connection.Schema;
var ItemModel = node_mongo_connection.ItemModel;

exports.item = function(req, res, next){

	if(req.method === "GET")
	{
		//Si un id a bien été passé en paramètre, on va sélectionner un seul item
		if(typeof req.params.item_id !== "undefined")
		{
			var item_id = req.params.item_id;
			
			//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
			if(mongoose.Types.ObjectId.isValid(item_id))
			{

				ItemModel.find({_id: item_id, visible: 1}).exec(function(err, rows) {
					if (err) {
						console.log("Error Selecting : %s ", err );
					 	throw err;
					}

					res.json(rows);
				});
			}
			else
			{
				res.status(500).send({ error: 'ID non valide' });
			}

/*
		    connection.query('SELECT * FROM item WHERE id=?', [item_id], function(err, rows) {
			 	if (err) {
					console.log("Error Selecting : %s ",err );
				 	throw err;
				}
				
				res.send(rows);

			});

*/
		}
		//Sinon, on renvoie tous les items
		else
		{
			ItemModel.find({visible: 1}).sort({ item_order : 'ascending'}).exec(function(err, rows) {
				if (err) {
					console.log("Error Selecting : %s ", err );
				 	throw err;
				}

				res.json(rows);
			});

/*

			connection.query('SELECT * FROM item WHERE visible=1 ORDER BY item_order asc', function(err, rows) {
			 	if (err) {
					console.log("Error Selecting : %s ",err );
				 	throw err;
				}
				
				res.send(rows);

			});

*/
		}
	}
	else if(req.method === "POST")
	{

		var item_name = req.body.item_name.trim();
		var user_id = "57610daa8d82383010000029";
		var item_order =  0;

		//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
		if(mongoose.Types.ObjectId.isValid(user_id))
		{

			ItemModel.find({}, function(err, rows) {
			   	if (err) {
					console.log("Error Selecting : %s ",err );
				 	throw err;
				}
			  	
			  	var nb_items =  rows.length + 1;
			  	

			  	//console.log("Ajout d'un nouvel item : nombre actuellement existant d'items:  " + nb_items);
			
			  	var item = new ItemModel({ 
					name 			: item_name,
					item_order		: nb_items,
					_fk_user_id		: user_id,
					visible			: 1
				});

			  	item.save(function (err) {
					if (err) {
						console.log("Error Inserting : %s ",err );
					 	throw err;
					}
				  	
				  	res.status(200).send({ success: 'Inserted Successfully' });
			  	});

			});
		}
		else
		{
			res.status(500).send({ error: 'ID non valide' });
		}


	}
	else if(req.method === "PUT")
	{
		if(typeof req.body.item_id !== "undefined")
		{
			var item_id = req.body.item_id;
			var item_name = req.body.item_name.trim();
			var user_id = "57610daa8d82383010000029";

			//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
			if(mongoose.Types.ObjectId.isValid(item_id) && mongoose.Types.ObjectId.isValid(user_id))
			{
				ItemModel.findById(item_id, function (err, item) {
					if (err) {
						console.log("Error Finding item : %s ", err );
					 	throw err;
					}

					item.name = item_name;
					item.last_modification = new Date();
					item._fk_user_id = user_id;

					item.save(function (err) {
						if (err) {
							console.log("Error Updating : %s ", err );
						 	throw err;
						}
						
						res.status(200).send({ success: 'Updated Successfully' });
					});
				});
			}
			else
			{
				res.status(500).send({ error: 'ID non valides' });
			}

/*
			connection.query('UPDATE item SET last_modification=NOW(), name=?, fk_user_id=? WHERE id=?', [item_name, user_id, item_id], function (err, result) {
				if (err) {
					console.log("Error Updating : %s ",err );
				 	throw err;
				}

				res.send({success : "Updated Successfully", status : 200});

			});
*/
		}
		else
		{
			res.redirect('/404');
		}
	}
	else if(req.method === "DELETE")
	{
		if(typeof req.body.item_id !== "undefined")
		{
			var item_id = req.body.item_id;
			var user_id = "57610daa8d82383010000029";

			//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
			if(mongoose.Types.ObjectId.isValid(item_id) && mongoose.Types.ObjectId.isValid(user_id))
			{
				ItemModel.findById(item_id, function (err, item) {
					if (err) {
						console.log("Error Finding item : %s ", err );
					 	throw err;
					}

					item.visible = 0;
					item.last_modification = new Date();
					item._fk_user_id = user_id;

					item.save(function (err) {
						if (err) {
							console.log("Error Deleting : %s ", err );
						 	throw err;
						}
						
						res.status(200).send({ success: 'Deleted Successfully' });
					});
				});
			}
			else
			{
				res.status(500).send({ error: 'ID non valides' });
			}	
/*
			connection.query('UPDATE item SET last_modification=NOW(), visible=0, fk_user_id=? WHERE id=?', [user_id, item_id], function (err, result) {
				if (err) {
					console.log("Error Updating : %s ",err );
				 	throw err;
				}

				res.send({success : "Deleted Successfully", status : 200});

			});
*/
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
exports.getItems = function(req, res, next){
*/
	/*
    connection.query('SELECT * FROM item WHERE visible=1 ORDER BY item_order asc', function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		res.send(rows);

	});
	*/

/*
	var hu = [{"id":1,"name":"Earth","item_order":1,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":2,"name":"Papyrus","item_order":2,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":3,"name":"Naysayer","item_order":3,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":4,"name":"Dead man walking","item_order":4,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":5,"name":"Hollow crown","item_order":5,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":6,"name":"Devil's island","item_order":6,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":7,"name":"Truth be told","item_order":7,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":8,"name":"Gone with the wind","item_order":8,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1},{"id":9,"name":"These colours don't run","item_order":9,"fk_user_id":1,"last_modification":"2016-06-01T22:00:00.000Z","visible":1}];
	res.json(hu);
	

};

*/



/*
exports.item = function(req, res, next){

	if(req.method === "GET")
	{
		//Si un id a bien été passé en paramètre, on va sélectionner un seul item
		if(typeof req.params.item_id !== "undefined")
		{
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
		}
		//Sinon, on renvoie tous les items
		else
		{
			connection.query('SELECT * FROM item WHERE visible=1 ORDER BY item_order asc', function(err, rows) {
			 	if (err) {
					console.log("Error Selecting : %s ",err );
				 	throw err;
				}
				
				res.send(rows);

			});
		}
	}
	else if(req.method === "POST")
	{

		var item_name = req.body.item_name.trim();
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
*/