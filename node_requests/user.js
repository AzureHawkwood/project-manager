
var passport		= require('passport');
var jwt         	= require('jwt-simple');
var constants 	= require("../node_constants");
var node_mongo_connection = require("../node_mongo_connection");
var mongoose = node_mongo_connection.mongoose;
var Schema = node_mongo_connection.Schema;
var UserModel = node_mongo_connection.UserModel;


exports.getUser = function(req, res){

  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, constants.secret);
    User.findOne({
      login: decoded.login
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
};


exports.addUser = function(req, res){

	if (!req.body.login || !req.body.password || !req.body.email) {
    	res.json({success: false, msg: 'Merci de remplir les valeurs obligatoires'});
	} else {
		var firstname = req.body.firstname.trim();
		var login = req.body.login.trim();
		var password = req.body.password.trim();
		var email = req.body.email();


		var newUser = new UserModel({
			firstname: firstname,
			login: login,
			password: password,
			email: email
		});

		//On enregistre l'utilisateur 
		//(save a été réécrit dans le fichier node_mongo_connection pour salter le password)
		newUser.save(function(err) {
			if (err) {
				console.log("Error save new user")
				return res.json({success: false, msg: "Le nom d'utilisateur ou le mail existent déjà"});
			}
			res.json({success: true, msg: "Nouvel utilisateur correctement ajouté"});
		});
	}

};

exports.authenticate = function(req, res){
  User.findOne({
    login: req.body.login
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, constants.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};

