
var express   =     require("express");
var app       =     express();


var r_task = require('./node_requests/task');
var r_item = require('./node_requests/item');
var r_manager = require('./node_requests/manager');
var r_action = require('./node_requests/action');
var r_project = require('./node_requests/project');
var r_user = require('./node_requests/user');



//Important !!! Décrire les url des dossiers se trouvant dans app ici, car le serveur se trouve à la racine, un cran plus haut,
//il faut donc dire que le dossier front racine se trouve dans le dossier app
app.use('/', express.static(__dirname + '/app'));


/*
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});
*/



/*

//VERSION OPERATIONNELLE 1 : 

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

	//console.log('connected as id ' + connection.threadId);
});

app.get('/getTasks', function(req,res){
	
    connection.query('SELECT * FROM task ORDER BY task_order asc', function(err, rows, fields) {
		
		if (err) {
			res.send([]);
		 	throw err;
		}
		
		res.send(rows);

	});
	
})
.post('/getTasks',function(req,res){
	console.log("hoho post");
})
.all('*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});

*/


/* ******

REQUETES SQL DEPUIS NODE : 


SELECT

con.query('SELECT * FROM employees',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});



INSERT

var employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});



UPDATE

con.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ["South Africa", 5],
  function (err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);



DELETE 

con.query(
  'DELETE FROM employees WHERE id = ?',
  [5],
  function (err, result) {
    if (err) throw err;

    console.log('Deleted ' + result.affectedRows + ' rows');
  }
);

* *******/




/*
//VERSION OPERATIONNELLE 2 : avec un pool d'adresses

var mysqlPool = mysql.createPool({
	connectionLimit : 100, //important
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'project_manager'
});

app.get('/getTasks', function(req,res){
	
	mysqlPool.getConnection(function(err, connection){

		connection.query('SELECT * FROM task ORDER BY task_order asc', function(err, rows) {
			
			if (err) {
				res.send([]);
			 	throw err;
			}
			
			res.send(rows);

		});
	  	
		connection.release();
	});

})
.post('/getTasks',function(req,res){
	console.log("hoho post");
})
.all('*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});
*/



app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
})
.get('/getTasks', r_task.getTasks)
.get('/getItems', r_item.getItems)
.get('/getActions', r_action.getActions)
.get('/getLastActions', r_action.getLastActions)
.all('*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});


app.listen(8080,function(){
	console.log("Started on PORT 8080");
})

