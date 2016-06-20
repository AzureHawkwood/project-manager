var mongoose 	= require("mongoose");
var Schema    	= mongoose.Schema;


var ActionSchema = new Schema({
	_fk_item_id		: { type: Schema.Types.ObjectId, ref: 'item' },
	_fk_task_id		: { type: Schema.Types.ObjectId, ref: 'task' },
	_fk_user_id		: { type: Schema.Types.ObjectId, ref: 'user' },
	_fk_state_id	: { type: Schema.Types.ObjectId, ref: 'state' },
	comment			: { type: String, default: "" },
	creation_date	: { type: Date, default: Date.now }
}, {collection: "action"});



module.exports = mongoose.model('action', ActionSchema);

