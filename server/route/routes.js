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

    if(req.isAuthenticated())
    {
      res.redirect('/');
    }
    
    
    res.sendFile('authentication.html', { root: dirname+'/app' });
  })
  


  .get('/getStates', route_state.getStates)

  .get('/getLastActions', route_action.getLastActions)
  .get('/getActions/:task_id/:item_id', route_action.getActions)
  .post('/addAction', route_action.addAction)
  .post('/removeAction', route_action.removeAction)

  
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
    res.status(200).json({error: false, message: "Correctement connecté", user: req.user});
  })
  .get('/loginFailRoute', function(req, res) {
    res.status(200).json({error: true, message: "Mauvais identifiants", user: {}});
  })
  .get('/registerSuccessRoute', function(req, res) {
    res.status(200).json({error: false, message: "Correctement enregistré", user: req.user});
  })
  .get('/registerFailRoute', function(req, res) {
    res.status(200).json({error: true, message: "Ce login existe déjà", user: {}});
  })

 
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
  
}
