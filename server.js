
var express   =     require("express");
var app       =     express();


//Important !!! Décrire les url des dossiers se trouvant dans app ici, car le serveur se trouve à la racine, un cran plus haut,
//il faut donc dire que le dossier front racine se trouve dans le dossier app
app.use('/', express.static(__dirname + '/app'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: __dirname+'/app' });
});

app.listen(8080,function(){
	console.log("Started on PORT 8080");
})

