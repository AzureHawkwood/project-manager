
var express			= require("express");
var bodyParser 		= require('body-parser');
var morgan			= require('morgan');
var mongoose 		= require('mongoose');
var passport		= require('passport');
var flash    		= require('connect-flash');
var cookieParser 	= require('cookie-parser');
var session 		= require('express-session')
//var jwt         	= require('jwt-simple');
var app				= express();

var constant = require('./server/config/Constant');	

mongoose.connect(constant.MONGO_DB_URL);
//On envoie à notre fichier Passport.js du dossier config
//notre variable passport initialisée à partir du module passport
require('./server/config/Passport')(passport);


//urlencoded pour récupérer le body encodé au format utf8, le extender false
//permet de n'autoriser que des variables string et array, et pas n'importe quoi
app.use(bodyParser.urlencoded({ extended: true }));
//Pour pouvoir récupérer des paramètres post dans node au format json
//on pourra à présent y accéder par req.body.variable
app.use(bodyParser.json());

//Log dans la console
//app.use(morgan('dev'));

//Important !!! Décrire les url des dossiers se trouvant dans app ici, car le serveur se trouve à la racine, un cran plus haut,
//il faut donc dire que le dossier front racine se trouve dans le dossier app
//app.use('/', express.static(__dirname + '/app'));
app.use('/', express.static(__dirname + '/app', {index: false, redirect: false}));

// set up our express application
//app.use(express.logger('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(express.bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: constant.SECRET,
					resave: true,
				 	saveUninitialized: true
			   	}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



// routes ======================================================================
// load our routes and pass in our app and fully configured passport
require('./server/route/routes')(app, passport, __dirname);






app.listen(constant.NODE_PORT, constant.NODE_HOST, function(){
	console.log("Server started on PORT "+constant.NODE_PORT+ " and HOST " + constant.NODE_HOST);
});

