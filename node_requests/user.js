var node_mongo_connection = require("../node_mongo_connection");
var mongoose = node_mongo_connection.mongoose;
var Schema = node_mongo_connection.Schema;


var userSchema = new Schema({
	//_id     	: { type: Schema.Types.ObjectId, default: function () { return new ObjectId()} }, En fait, il ne faut pas le préciser, comme ça mongo s'en charge tout seul
	login		: String,
	password	: String,
	firstname	: String,
	email		: String,
	rights		: {type: Number, default: 1}
}, {collection: "userhuhu"});

var userModel = mongoose.model('userhuhu', userSchema);


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





var personSchema = new Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = new Schema({
  _creator : { type: Number, ref: 'Person' },
  title    : String,
  fans     : [{ type: Number, ref: 'Person' }]
});

var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);



exports.addPerson = function(req, res, next){

	var aaron = new Person({ name: 'Aaron', age: 100 });

	aaron.save(function (err) {
	  if (err) throw err;
	  
	  var story1 = new Story({
	    title: "Once upon a timex.",
	    _creator: aaron._id    // assign the _id from the person
	  });
	  
	  story1.save(function (err, rows) {
	    if (err) throw err;
	    // thats it!

	    res.json(rows);


	  });
	});


};

exports.getPerson = function(req, res, next){


	Story
.findOne({ title: 'Once upon a timex.' })
.populate('_creator')
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The creator is %s', story._creator.name);
  // prints "The creator is Aaron"

  res.json(story);
});

};








var huhu_itemSchema = new Schema({
	name    : String,
	date_creation: { type: Date, default: Date.now },
}, {collection: "huhu_item"});

var huhuSchema = new Schema({
  _huhu_item : { type: Schema.Types.ObjectId, ref: 'huhu_item' },
  _huhu_task  : { type: Schema.Types.ObjectId, ref: 'huhu_task' },
  name     : { type: String, default: 'Undefined' }
}, {collection: "huhu"});

var huhu_taskSchema = new Schema({
  	name    : String,
	date_creation: { type: Date, default: Date.now },
}, {collection: "huhu_task"});



var huhu_item = mongoose.model('huhu_item', huhu_itemSchema);
var huhu = mongoose.model('huhu', huhuSchema);
var huhu_task = mongoose.model('huhu_task', huhu_taskSchema);




exports.addStuff = function(req, res, next){

	var stuff = new huhu_item({ name: 'item'+Math.random() });
	

	stuff.save(function (err) {
	  if (err) throw err;

		var stuff2 = new huhu_task({ name: 'task'+Math.random() });
		stuff2.save(function (err) {
		if (err) throw err;

 

			var stuff3 = new huhu({ 
				_huhu_item : stuff._id,
				_huhu_task  : stuff2._id,
				name: 'huhu'+Math.random()
			});


			stuff3.save(function (err, rows) {
			    if (err) throw err;
			    // thats it!

			    	res.json(rows);


			});

		});

	 
	});


};

exports.getStuff = function(req, res, next){


huhu
.find({ })
.populate('_huhu_item').populate('_huhu_task')
.exec(function (err, rows) {
   if (err) throw err;
  
  res.json(rows);
});

};







