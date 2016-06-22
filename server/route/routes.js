var route_task = require('./task');
var route_item = require('./item');
var route_manager = require('./manager');
var route_action = require('./action');
var route_project = require('./project');
var route_user = require('./user');
var route_state = require('./state');


module.exports = function(app, passport, dirname) {


  //Comme pour chacune de ces routes, il y a à chaque fois plusieurs méthodes
  //get post put et delete, on simplifie l'appel, et on va gérer ça dans un routeur
  //dans les fichiers suivants
  app.use('/task',  route_task);
  app.use('/item',  route_item);


  app.get('/', isLoggedIn, function (req, res) {
    //console.log("Route GET /");
    res.sendFile('index.html',  { root: dirname+'/app'});
  })

  .get('/authentication', function (req, res) {
    //console.log("Route GET /authentication");
   // console.log("authentication :  "+ req.user);
    //res.sendFile('index.html', { root: __dirname+'/app'} );
    res.sendFile('authentication.html', { root: dirname+'/app' });
  })
  


  .get('/getStates', route_state.getStates)

  .get('/getLastActions', route_action.getLastActions)
  .get('/getActions/:task_id/:item_id', route_action.getActions)
  .post('/addAction', route_action.addAction)
  .post('/removeAction', route_action.removeAction)

  /*.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') });
  })*/
  /*
  .post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/authentication', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }))
  */

/*
.post('/register', route_user.register)

.post('/login', passport.authenticate('local'), function(req, res) {
  console.log("HUUUUUUUUUUUUU Route GET /login" + req.user);
    //res.redirect('/');
})*/


  /*.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  })*/
  /*
  .post('/register', passport.authenticate('local-register', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/register', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }))
  */
  /*
 .post('/login', function(req, res, next) {

  console.log("POST /login");
    passport.authenticate('local-login', function(err, user, info) {
      console.log("passport.authenticate /login");
        if (err) {
          //return next(err);
            res.status(500).send({message: "Erreur serveur"});
        }
        if (!user) {
            console.log("!user /login");

            console.log(info);
            // *** Display message without using flash option
            // re-render the login form with a message
            //res.redirect('/login');
            res.status(401).send({ message: 'User invalide' });

        }

        //console.log('got user'+user);
        res.status(200).json(user.local);

    })(req, res, next);
})
*/

 /*
  .post('/register', passport.authenticate('local-register', {
    //successRedirect : '/authentication', // redirect to the secure profile section
    //failureRedirect : '/register', // redirect back to the signup page if there is an error
    //failureFlash : true // allow flash messages
  }))
*/

/*
.post('/register', passport.authenticate('local-register', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/register', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }), function (req, res, err){
    console.log("req: " + req);
    //return res.local;


    //successRedirect : '/authentication', // redirect to the secure profile section
    //failureRedirect : '/register', // redirect back to the signup page if there is an error
    //failureFlash : true // allow flash messages
  })*/
  .post('/login', passport.authenticate('local-login', {
    successRedirect : '/loginSuccessRoute', // redirect to the secure profile section
    failureRedirect : '/loginFailRoute', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }))
  .post('/register', passport.authenticate('local-register', {
    successRedirect : '/registerSuccessRoute', // redirect to the secure profile section
    failureRedirect : '/registerFailRoute', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }))

  .get('/loginSuccessRoute', function(req, res) {
    res.status(200).json({error: false, message: "Correctement connecté"});
  })
  .get('/loginFailRoute', function(req, res) {
    res.status(200).json({error: true, message: "Mauvais identifiants"});
  })
  .get('/registerSuccessRoute', function(req, res) {
    res.status(200).json({error: false, message: "Correctement enregistré"});
  })
  .get('/registerFailRoute', function(req, res) {
    res.status(200).json({error: true, message: "Ce login existe déjà"});
  })

 /* .get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
    });
  })*/
  .get('/logout', function(req, res) {
    //console.log("Route POST /logout");
    req.logout();
    res.redirect('/authentication');
  })


  .get('/404', function (req, res) {
      //console.log("Route GET /404");
      res.sendFile('404.html', { root: dirname+'/app' });
  })

  .all('*', function (req, res) {
      //console.log("Route ALL *");
      //res.status(500).send({ error: 'PAS BON EN ATTENDANT DE TROUVER COMMENT CHARGER LE FICHIER' });
      res.sendFile('404.html', { root: dirname+'/app' });
  });

/*
  //Toutes les routes task et item sont simplifiées dans l'appel app.use plus haut
  .get('/task/:task_id', route_task.task)
  .get('/task', route_task.task)
  .post('/task', route_task.task)
  .put('/task', route_task.task)
  .delete('/task', route_task.task)

  .get('/item/:item_id', route_item.item)
  .get('/item', route_item.item)
  .post('/item', route_item.item)
  .put('/item', route_item.item)
  .delete('/item', route_item.item)
*/





/*
  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  .get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  .post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  .get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  .post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // PROFILE SECTION =========================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  .get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
    });
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  .get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

*/



};

// route middleware to make sure
function isLoggedIn(req, res, next) {
  //console.log("isLoggedIn requser : " + req.user);
  //console.log("CHECK SI AUTHENTIFIE :");

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
  {
    //console.log("EST AUTHENTIFIE");
    return next();
  }
  else
  {
    //console.log("N'EST PAS AUTHENTIFIE -> REDIRECT /login");

    res.redirect('/authentication');
  }
  //console.log("2 redirect /");
  // if they aren't redirect them to the home page
  //res.redirect('/login');
}
