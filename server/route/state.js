var mongoose  = require("mongoose");
var StateModel = require('../model/state');

exports.getStates = function(req, res, next){

    StateModel.find().sort({"name": 1}).exec(function(err, states) {
				if (err) {
					console.log("Error Selecting : %s ", err );
				 	throw err;
				}

				res.json(states);
			});

};