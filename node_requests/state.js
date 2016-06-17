var node_mongo_connection = require("../node_mongo_connection");
var mongoose = node_mongo_connection.mongoose;
var Schema = node_mongo_connection.Schema;
var StateModel = node_mongo_connection.StateModel;

exports.getStates = function(req, res, next){

    StateModel.find().exec(function(err, states) {
				if (err) {
					console.log("Error Selecting : %s ", err );
				 	throw err;
				}

				res.json(states);
			});

};