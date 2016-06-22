var mongoose  = require("mongoose");
var ActionModel = require('../model/action');



exports.getLastActions = function(req, res){



	ActionModel.find()
			.populate("_fk_item_id")
			.populate("_fk_task_id")
			.populate("_fk_user_id")
			.populate("_fk_state_id")
			.sort({"creation_date": 1})
			.exec(function(err, action){
				if (err) {
					console.log("Error Finding action : %s ", err );
				 	throw err;
				}


				var actions_json = {};

				
			    for(var i=0; i < action.length; i++)
				{
					if(action[i]._fk_task_id !== null && action[i]._fk_item_id !== null)
					{
						var task_id = action[i]._fk_task_id._id;
						var item_id = action[i]._fk_item_id._id;

						

						if(typeof  actions_json[task_id] !== "object")
					    {
					    	actions_json[task_id] = {};
					    }
						
						actions_json[task_id][item_id] = action[i];


					}

				}

				res.json(actions_json);

			});


};



exports.addAction = function(req, res){

	var task_id = req.body.task_id;
	var item_id = req.body.item_id;
	var state_id = req.body.state_id;
	var user_id = "";


	if(req.user._id)
	{	user_id = req.user._id.toHexString();	}

	//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
	if(mongoose.Types.ObjectId.isValid(task_id) && mongoose.Types.ObjectId.isValid(item_id) && mongoose.Types.ObjectId.isValid(user_id) && mongoose.Types.ObjectId.isValid(state_id))
	{
		var comment = req.body.comment.trim();
	  	//console.log("Ajout d'une nouvelle action");

	  	var action = new ActionModel({				
			_fk_item_id		: item_id,
			_fk_task_id		: task_id,
			_fk_user_id		: user_id,
			_fk_state_id	: state_id,
			comment			: comment
		});

	  	action.save(function (err) {
			if (err) {
				console.log("Error Inserting : %s ",err );
			 	throw err;
			}
		  	
		  	res.status(200).send({ success: 'Inserted Successfully' });
	  	});
	}
	else
	{
		res.status(422).send({ error: 'ID non valides' });
	}

};



exports.getActions = function(req, res){

	var task_id = req.params.task_id;
	var item_id = req.params.item_id;

	//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
	if(mongoose.Types.ObjectId.isValid(task_id) && mongoose.Types.ObjectId.isValid(item_id))
	{
		ActionModel.find({_fk_task_id: task_id, _fk_item_id: item_id})
			.populate("_fk_item_id")
			.populate("_fk_task_id")
			.populate("_fk_user_id")
			.populate("_fk_state_id")
			.sort({"creation_date": -1})
			.exec(function(err, actions){
				if (err) {
					console.log("Error Finding action : %s ", err );
				 	throw err;
				}

				res.json(actions);


			});
	}
	else
	{
		res.status(422).send({ error: 'ID non valides' });
	}
	


};



exports.removeAction = function(req, res){


	var action_id = req.body.action_id;

	//Si l'objet id est un id mongo valide (24 symboles de 0-9a-fA-F)
	if(mongoose.Types.ObjectId.isValid(action_id))
	{
		
		ActionModel.remove({ _id: action_id }, function(err) {
		    if (err) {
				console.log("Error Finding action : %s ", err );
			 	throw err;
			}

			res.send({success : "Removed Successfully", status : 200});

		});
	}
	else
	{
		res.status(422).send({ error: 'ID non valide' });
	}

};