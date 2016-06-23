var express = require('express');
var router = express.Router();
var mongoose  = require("mongoose");
var TaskModel = require('../model/task');



router.get('/', function(req, res) {

	TaskModel.find({visible: 1}).sort({ task_order : 'ascending'}).exec(function(err, rows) {
		if (err) {
			console.log("Error Selecting : %s ", err );
		 	throw err;
		}

		res.json(rows);
	});

});


router.get('/:task_id', function(req, res) {

	var task_id = req.params.task_id;
			
	//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
	if(mongoose.Types.ObjectId.isValid(task_id)) {

		TaskModel.find({_id: task_id, visible: 1}).exec(function(err, rows) {
			if (err) {
				console.log("Error Selecting : %s ", err );
			 	throw err;
			}

			res.json(rows);
		});

	} else {
		res.status(422).send({ error: 'ID non valide' });
	}

});

router.post('/', function(req, res) {

	if(typeof req.body.task_name !== "undefined")
	{
		var task_name = req.body.task_name.trim();
		var task_order =  0;
		var user_id = "";

		if(typeof req.user !== "undefined")
		{	user_id = req.user._id.toHexString();	}

		//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
		if(mongoose.Types.ObjectId.isValid(user_id) && task_name != "") {

			TaskModel.find({}, function(err, rows) {
			   	if (err) {
					console.log("Error Selecting : %s ",err );
				 	throw err;
				}
			  	
			  	var nb_tasks =  rows.length + 1;
			  	

			  	//console.log("Ajout d'un nouvel task : nombre actuellement existant d'tasks:  " + nb_tasks);
			
			  	var task = new TaskModel({ 
					name 			: task_name,
					task_order		: nb_tasks,
					_fk_user_id		: user_id,
					visible			: 1
				});

			  	task.save(function (err) {
					if (err) {
						console.log("Error Inserting : %s ",err );
					 	throw err;
					}
				  	
				  	res.status(200).send({ success: 'Inserted Successfully' });
			  	});

			});

		} else {
			res.status(422).send({ error: 'ID non valide' });
		}
	}
	else
	{
		res.redirect('/404');
	}

});



router.put('/', function(req, res) {

	if(typeof req.body.task_id !== "undefined" && typeof req.body.task_name !== "undefined")
	{

		var task_id = req.body.task_id;
		var task_name = req.body.task_name.trim();
		var user_id = "";

		
		if(typeof req.user !== "undefined")
		{	user_id = req.user._id.toHexString();	}


		//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
		if(mongoose.Types.ObjectId.isValid(task_id) && mongoose.Types.ObjectId.isValid(user_id))
		{


			TaskModel.findById(task_id, function (err, task) {
				if (err) {
					console.log("Error Finding task : %s ", err );
				 	throw err;
				}
				task.name = task_name;
				task.last_modification = new Date();
				task._fk_user_id = user_id;
				task.save(function (err) {
					if (err) {
						console.log("Error Updating : %s ", err );
					 	throw err;
					}
						
					res.status(200).send({ success: 'Updated Successfully' });
				});
			});
		} else {
			console.log("id non valides ?!")
			res.status(422).send({ error: 'ID non valides' });
		}
	}
	else
	{
		res.redirect('/404');
	}
	
});

router.delete('/', function(req, res) {

	if(typeof req.body.task_id !== "undefined")
	{
		var task_id = req.body.task_id;
		var user_id = "";

		if(typeof req.user !== "undefined")
		{	user_id = req.user._id.toHexString();	}
		

		//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
		if(mongoose.Types.ObjectId.isValid(task_id) && mongoose.Types.ObjectId.isValid(user_id))
		{

			TaskModel.findById(task_id, function (err, task) {
				if (err) {
					console.log("Error Finding task : %s ", err );
				 	throw err;
				}

				task.visible = 0;
				task.last_modification = new Date();
				task._fk_user_id = user_id;

				task.save(function (err) {
					if (err) {
						console.log("Error Deleting : %s ", err );
					 	throw err;
					}
					
					res.status(200).send({ success: 'Deleted Successfully' });
				});
			});

		} else {
			res.status(422).send({ error: 'ID non valides' });
		}
	}
	else
	{
		res.redirect('/404');
	}

});




router.put('/updateTaskOrder', function(req, res) {

	if(typeof req.body !== "undefined")
	{
		var tabOrderTask = req.body;

		TaskModel.find({}, function(err, task) {
		   	if (err) {
				console.log("Error Selecting : %s ",err );
			 	throw err;
			}
		  	
			for(var i=0; i < task.length; i++)
			{
				if(typeof tabOrderTask[task[i]._id] !== "undefined")
				{
					task[i].task_order = tabOrderTask[task[i]._id];

					task[i].save(function (err) {
						if (err) {
							console.log("Error Inserting : %s ",err );
						 	throw err;
						}
			  		});
				}
			}
			
			res.status(200).send({ success: 'Updated Successfully' });
			

		});

	}
	else
	{
		res.status(422).send({ error: 'Mauvais JSON envoyé' });
	}

});




module.exports = router;





/*

exports.task = function(req, res, next){

	if(req.method === "GET")
	{
		//Si un id a bien été passé en paramètre, on va sélectionner un seul task
		if(typeof req.params.task_id !== "undefined")
		{
			var task_id = req.params.task_id;
			
			//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
			if(mongoose.Types.ObjectId.isValid(task_id))
			{

				TaskModel.find({_id: task_id, visible: 1}).exec(function(err, rows) {
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

		}
		//Sinon, on renvoie tous les tasks
		else
		{
			TaskModel.find({visible: 1}).sort({ task_order : 'ascending'}).exec(function(err, rows) {
				if (err) {
					console.log("Error Selecting : %s ", err );
				 	throw err;
				}

				res.json(rows);
			});

		}
	}
	else if(req.method === "POST")
	{

		var task_name = req.body.task_name.trim();
		var user_id = "57610daa8d82383010000029";
		var task_order =  0;

		//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
		if(mongoose.Types.ObjectId.isValid(user_id))
		{

			TaskModel.find({}, function(err, rows) {
			   	if (err) {
					console.log("Error Selecting : %s ",err );
				 	throw err;
				}
			  	
			  	var nb_tasks =  rows.length + 1;
			  	

			  	//console.log("Ajout d'un nouvel task : nombre actuellement existant d'tasks:  " + nb_tasks);
			
			  	var task = new TaskModel({ 
					name 			: task_name,
					task_order		: nb_tasks,
					_fk_user_id		: user_id,
					visible			: 1
				});

			  	task.save(function (err) {
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
		if(typeof req.body.task_id !== "undefined")
		{
			var task_id = req.body.task_id;
			var task_name = req.body.task_name.trim();
			var user_id = "57610daa8d82383010000029";
			//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
			if(mongoose.Types.ObjectId.isValid(task_id) && mongoose.Types.ObjectId.isValid(user_id))
			{
				TaskModel.findById(task_id, function (err, task) {
					if (err) {
						console.log("Error Finding task : %s ", err );
					 	throw err;
					}
					task.name = task_name;
					task.last_modification = new Date();
					task._fk_user_id = user_id;
					task.save(function (err) {
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

		}
		else
		{
			res.redirect('/404');
		}
	}
	else if(req.method === "DELETE")
	{
		if(typeof req.body.task_id !== "undefined")
		{
			var task_id = req.body.task_id;
			var user_id = "57610daa8d82383010000029";

			//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
			if(mongoose.Types.ObjectId.isValid(task_id) && mongoose.Types.ObjectId.isValid(user_id))
			{

				TaskModel.findById(task_id, function (err, task) {
					if (err) {
						console.log("Error Finding task : %s ", err );
					 	throw err;
					}

					task.visible = 0;
					task.last_modification = new Date();
					task._fk_user_id = user_id;

					task.save(function (err) {
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
