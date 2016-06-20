var mongoose 	= require("mongoose");
var Schema    	= mongoose.Schema;

var ItemSchema = new Schema({
	name		: String,
	item_order	: Number,
	_fk_user_id	: { type: Schema.Types.ObjectId, ref: 'user' },
	last_modification	: { type: Date, default: Date.now },
	visible		: {type: Number, default: 1}
}, {collection: "item"});


module.exports = mongoose.model('item', ItemSchema);


