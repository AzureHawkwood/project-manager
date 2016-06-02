
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


var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'project_manager'
});
connection.connect();


app.use('/', express.static(__dirname + '/app'));

app.get('/getTasks', function(req,res){
	
	
    connection.query('SELECT * from task', function(err, rows, fields) {
		if (err) throw err
		console.log('The solution is: ' + rows[0].name);
		//return rows;
		res.send(rows);
	});
	//connection.end();

	console.log("huhu get");
	/*var arr =   [
			{	id: 1,
				name: "task 1",
				order: 1
			},
			{	id: 2,
				name: "task 2",
				order: 4
			},
			{	id: 3,
				name: "task 3",
				order: 3
			},
			{	id: 4,
				name: "task 4",
				order: 2
			},
			{	id: 5,
				name: "task 5",
				order: 5
			}
		];*/
		//return arr;
		//res.send(arr);
});
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

