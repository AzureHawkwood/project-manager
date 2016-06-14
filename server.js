
var express   =     require("express");
var bodyParser = require('body-parser')
var app       =     express();


var r_task = require('./node_requests/task');
var r_item = require('./node_requests/item');
var r_manager = require('./node_requests/manager');
var r_action = require('./node_requests/action');
var r_project = require('./node_requests/project');
var r_user = require('./node_requests/user');
var r_state = require('./node_requests/state');

//urlencoded pour récupérer le body encodé au format utf8, le extender false
//permet de n'autoriser que des variables string et array, et pas n'importe quoi
app.use(bodyParser.urlencoded({ extended: false }));
//Pour pouvoir récupérer des paramètres post dans node au format json
//on pourra à présent y accéder par req.body.variable
app.use(bodyParser.json());


//Important !!! Décrire les url des dossiers se trouvant dans app ici, car le serveur se trouve à la racine, un cran plus haut,
//il faut donc dire que le dossier front racine se trouve dans le dossier app
app.use('/', express.static(__dirname + '/app'));






app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
})

.get('/getStates', r_state.getStates)

.get('/getLastActions', r_action.getLastActions)
.get('/getActions/:task_id/:item_id', r_action.getActions)
.post('/addAction', r_action.addAction)
.post('/removeAction', r_action.removeAction)

.get('/getTask/:task_id', r_task.getTask)
.get('/getTasks', r_task.getTasks)
.post('/task', r_task.task)
.put('/task', r_task.task)
.delete('/task', r_task.task)

.get('/getItem/:item_id', r_item.getItem)
.get('/getItems', r_item.getItems)
.post('/item', r_item.item)
.put('/item', r_item.item)
.delete('/item', r_item.item)

app.get('/404', function (req, res) {
    res.sendFile('404.html', { root: __dirname+'/app' });
})

.all('*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});


app.listen(8080,function(){
	console.log("Started on PORT 8080");
})

