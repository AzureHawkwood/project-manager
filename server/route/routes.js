var route_task = require('./task');
var route_item = require('./item');
var route_manager = require('./manager');
var route_action = require('./action');
var route_project = require('./project');
var route_user = require('./user');
var route_state = require('./state');


module.exports = function(app, passport, mongoose) {


  //Comme pour chacune de ces routes, il y a à chaque fois plusieurs méthodes
  //get post put et delete, on simplifie l'appel, et on va gérer ça dans un routeur
  //dans les fichiers suivants
  app.use('/task',  route_task);
  app.use('/item',  route_item);


  app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
  })


  .get('/getStates', route_state.getStates)



  .get('/getLastActions', route_action.getLastActions)
  .get('/getActions/:task_id/:item_id', route_action.getActions)
  .post('/addAction', route_action.addAction)
  .post('/removeAction', route_action.removeAction)


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



  .post('/authenticate', route_user.authenticate)
  .post('/addUser', route_user.addUser)
  .get('/getUser/:user', route_user.getUser)

   

  app.get('/404', function (req, res) {
      res.sendFile('404.html', { root: __dirname+'/app' });
  })

  .all('*', function (req, res) {
      res.sendFile('404.html', { root: __dirname+'/app' });
  });



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

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
