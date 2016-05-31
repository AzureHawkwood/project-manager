
var express   =     require("express");
var app       =     express();

/*
app.get('/',function(req,res){
	res.sendFile("index.html");
});

app.post('/login',function(req,res){
	var user_name=req.body.login;
	var password=req.body.password;
	var mail=req.body.email;
	console.log("From Client pOST request: User name = "+user_name+" and password is "+password);
	res.end("yes");
});


app.listen(8080,function(){
	console.log("Started on PORT 8080");
})
*/



/*
app.get('/', routes.index);
app.get('*', routes.index);
exports.index = function(req, res){
	res.render('layout');
};


app.listen(8080,function(){
	console.log("Started on PORT 8080");
})

*/

//Important !!! Décrire les url des dossiers se trouvant dans app ici, car le serveur se trouve à la racine, un cran plus haut,
//il faut donc dire que le dossier front racine se trouve dans le dossier app
app.use('/', express.static(__dirname + '/app'));

/*
//version fonctionnelle mais plus longue car obligé de décrire tous les dossiers
app.use('/images', express.static(__dirname + '/app/images'));
app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/bower_components', express.static(__dirname + '/app/bower_components'));
app.use('/styles', express.static(__dirname + '/app/styles'));
app.use('/views', express.static(__dirname + '/app/views'));
*/

//app.post('/projects/', projectController.createProject);
//app.get('/projects/:id', projectController.getProject);
app.get('/*', function (req, res) {
    //res.sendFile('app/index.html');
    //res.render('app/index.html');


    //res.sendFile('index.html', { root: __dirname+'/app' });
    res.sendFile('index.html');
});

app.listen(8080,function(){
	console.log("Started on PORT 8080");
})

