var constants   = require("./node_constants");
var JwtStrategy = require('passport-jwt').Strategy;

// load up the user model
var node_mongo_connection = require("../node_mongo_connection");
var mongoose = node_mongo_connection.mongoose;
var Schema = node_mongo_connection.Schema;
var UserModel = node_mongo_connection.UserModel;


module.exports = function(passport) {
  var opts = {};
  opts.secretOrKey = constants.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};