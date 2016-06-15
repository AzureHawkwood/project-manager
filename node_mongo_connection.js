var mongoose = require("mongoose");
var constants = require("./node_constants");



var mongo_url = "mongodb://"+constants.host_mongo+":"+constants.port_mongo+"/"+constants.database_mongo;

mongoose.connect(mongo_url);




exports.mongo_connection = mongoose;