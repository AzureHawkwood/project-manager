var mongoose 	= require("mongoose");
var Schema    = mongoose.Schema;


var TaskSchema = new Schema({
	name		: String,
	task_order	: Number,
	_fk_user_id	: { type: Schema.Types.ObjectId, ref: 'user' },
	last_modification	: { type: Date, default: Date.now },
	visible		: {type: Number, default: 1}
}, {collection: "task"});


module.exports = mongoose.model('task', TaskSchema);







