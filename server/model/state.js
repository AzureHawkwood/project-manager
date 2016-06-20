var mongoose 	= require("mongoose");
var Schema    	= mongoose.Schema;


var StateSchema = new Schema({
	name: { type: String, default: "" },
    class_name: { type: String, default: "" }
}, {collection: "state"});



module.exports = mongoose.model('state', StateSchema);

