
var express   =     require("express");
var app       =     express();
var mysql      = require('mysql');

//Important !!! Décrire les url des dossiers se trouvant dans app ici, car le serveur se trouve à la racine, un cran plus haut,
//il faut donc dire que le dossier front racine se trouve dans le dossier app
app.use('/', express.static(__dirname + '/app'));


/*
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});
*/


/*
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'project_manager'
});


connection.connect(function(err) {

	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});


//connection.query('SELECT * from task', function(err, rows, fields) {
//	if (err) throw err;
//
//	console.log('The solution is: ' + rows[0].name);
//});

connection.end();
*/



app.use('/', express.static(__dirname + '/app'));

app.get('/getTasks', function(req,res){
        console.log("huhu get");
    })
app.post('/getTasks',function(req,res){
       console.log("hoho post");
    });
/*
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});
*/






app.listen(8080,function(){
	console.log("Started on PORT 8080");
})

