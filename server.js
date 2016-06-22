
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
app.use('/', express.static(__dirname + '/app', {index: true, redirect: false}));

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




/*

var r_task = require('./server/route/task');
var r_item = require('./server/route/item');
var r_manager = require('./server/route/manager');
var r_action = require('./server/route/action');
var r_project = require('./server/route/project');
var r_user = require('./server/route/user');
var r_state = require('./server/route/state');


app.use('/task',  r_task);
app.use('/item',  r_item);


app.get('/', function (req, res) {
	console.log("huuuuuuuuuuuuuu");
    res.sendFile('index.html', { root: __dirname+'/app' });
})


.get('/login', function (req, res) {
    //res.sendFile('login.html', { root: __dirname+'/app' });
    console.log("HUUUUUHUUUUUUUUUUUUUUUUUUUUUUUUUU");
    
    res.status(200).send({ success: 'Inserted Successfully' });
})

.get('/register', function (req, res) {
    //res.sendFile('register.html', { root: __dirname+'/app' });
    console.log("HOOOOOOOOOOOO");
	
	res.status(200).send({ success: 'Inserted Successfully' });


})

.get('/logout', function (req, res) {
    //res.sendFile('logout.html', { root: __dirname+'/app' });
    console.log("HAAAAAAAAAAAAAAAAAAAA");
    
    res.status(200).send({ success: 'Inserted Successfully' });

})


.get('/getStates', r_state.getStates)

.get('/getLastActions', r_action.getLastActions)
.get('/getActions/:task_id/:item_id', r_action.getActions)
.post('/addAction', r_action.addAction)
.post('/removeAction', r_action.removeAction)

//.get('/task/:task_id', r_task.task)
//.get('/task', r_task.task)
//.post('/task', r_task.task)
//.put('/task', r_task.task)
//.delete('/task', r_task.task)

//.get('/item/:item_id', r_item.item)
//.get('/item', r_item.item)
//.post('/item', r_item.item)
//.put('/item', r_item.item)
//.delete('/item', r_item.item)

.post('/authenticate', r_user.authenticate)
.post('/addUser', r_user.addUser)
.get('/getUser/:user', r_user.getUser)

 

.get('/404', function (req, res) {
    res.sendFile('404.html', { root: __dirname+'/app' });
})

.all('*', function (req, res) {
	console.log("ho");
    res.sendFile('index.html', { root: __dirname+'/app' });
});

*/


app.listen(constant.NODE_PORT, constant.NODE_HOST, function(){
	console.log("Server started on PORT "+constant.NODE_PORT+ " and HOST " + constant.NODE_HOST);
});

