// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
// load up the user model
var User          = require('../model/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

  // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });


/*
  passport.use(new LocalStrategy(User.authenticate()));

*/



  // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'


    passport.use('local-register', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'login',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, loginparam, passwordparam, done) {

      
      if(typeof req.body.login !== "undefined" && typeof req.body.password !== "undefined" && typeof req.body.email !== "undefined" )
      {
        var login = req.body.login.trim();
        var password = req.body.password.trim();
        var email = req.body.email.trim();
        var firstname = "";
        if(typeof req.body.firstname !== "undefined")
        {
          firstname = req.body.firstname.trim();
        }
        


        //console.log("TENTATIVE REGISTER : ");
        //console.log("login : " + login + " password : " + password);

      // find a user whose login is the same as the forms login
      // we are checking to see if the user trying to login already exists
          User.findOne({ 'local.login' :  login }, function(err, user) {
              // if there are any errors, return the error
              if (err)
              {
                  console.log("Une erreur s'est produite dans la tentative de recherche si un utilisateur existe déjà avec ce login");
                  return done(err);
              }

              // check to see if theres already a user with that login
              if (user)
              {
                 //console.log("Login déjà pris !");

                  return done(null, false, req.flash('signupMessage', 'Ce login est déjà pris'));
              }
              else
              {
                //console.log("Ok, login libre");
                  // if there is no user with that login
                  // create the user
                  var newUser            = new User();


                  // set the user's local credentials
                  newUser.local.login    = login;
                  newUser.local.password = newUser.generateHash(password); // use the generateHash function in our user model
                  newUser.local.email    = email;
                  newUser.local.firstname    = firstname;
                   //console.log("On hash le mot de passe");

                   // save the user
                  newUser.save(function(err) {
                      if (err)
                      {
                         console.log("Erreur dans la fonction save pour la création du user");
                          throw err;
                      }

                       //console.log("User créé, on return la fonction done avec l'utilisateur");
                      return done(null, newUser);
                  });
              }

          });


        }
        else
        {

          return done(null, false, req.flash('signupMessage', 'Problème lors de l\'enregistrement'));
             
        }


    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'login',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, login, password, done) { // callback with login and password from our form
  //console.log("TENTATIVE LOGIN : ");
  //console.log("login : " + login + " password : " + password);
        // find a user whose login is the same as the forms login
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.login' :  login }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
            {
              console.log("Une erreur s'est produite dans la tentative de recherche de l'utilisateur");
              return done(err);
            }

            // if no user is found, return the message
            if (!user)
            {
              //console.log("Result 1 : utilisateur non existant");
                return done(null, false, req.flash('loginMessage', 'Aucun utilisateur n\'existe avec ces identifiants')); // req.flash is the way to set flashdata using connect-flash
            }

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
            {
              //console.log("Result 2 : password non valide");
                return done(null, false, req.flash('loginMessage', 'Mauvais mot de passe')); // create the loginMessage and save it to session as flashdata
            }

            //console.log("Result 3 user exiostant");
            // all is well, return successful user
            return done(null, user);
        });

    }));





};
