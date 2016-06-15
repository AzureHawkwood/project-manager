var node_mongo_connection = require("../node_mongo_connection");
var mongoose = node_mongo_connection.mongo_connection;



var userSchema = new mongoose.Schema({
	//_id     	: Number, En fait, il ne faut pas le préciser, comme ça mongo s'en charge tout seul
	login		: String,
	password	: String,
	firstname	: String,
	email		: String,
	rights		: {type: Number, Default: 1}
}, {collection: "user"});

var userModel = mongoose.model('user', userSchema);


exports.addUser = function(req, res, next){

	var user = new userModel({
		login		: "testlogin",
		password	: "testPassword",
		firstname	: "testFirstname",
		email		: "testEmail"
	});

	user.save(function(err, rows) {
		if (err) throw err;
		res.json(rows);
	});

};


exports.getUsers = function(req, res, next){

/*
    connection.query('SELECT * FROM item WHERE visible=1 ORDER BY item_order asc', function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		res.send(rows);

	});
	*/

	/*
	connection.findById(1,function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
	*/


	
	/*
	userModel.find({_id: "57610db48d8238301000002a"}, function(err, rows){
		res.json(rows);
	});
	*/

	userModel.find({}, function(err, rows){
		res.json(rows);
	});

};
