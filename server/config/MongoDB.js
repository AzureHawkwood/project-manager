var mongoose 	= require("mongoose");
var constants 	= require("./node_constants");
var bcrypt		= require("bcrypt-nodejs");



mongoose.connect(constants.mongo_db_url);




var Schema = mongoose.Schema;

var UserSchema = new Schema({
  	login: {
        type: String,
        unique: true,
        required: true
    },
  	password: {
        type: String,
        required: true
    },
    firstname: { 
    	type: String,
    	default: ""
    },
	email: {
		type: String,
		unique: true,
		required: true
	}
}, {collection: "user"});

var StateSchema = new Schema({
	name: { type: String, default: "" },
    class_name: { type: String, default: "" }
}, {collection: "state"});

var TaskSchema = new Schema({
	name		: String,
	task_order	: Number,
	_fk_user_id	: { type: Schema.Types.ObjectId, ref: 'user' },
	last_modification	: { type: Date, default: Date.now },
	visible		: {type: Number, default: 1}
}, {collection: "task"});

var ItemSchema = new Schema({
	//_id     	: { type: Schema.Types.ObjectId, default: function () { return new ObjectId()} }, En fait, il ne faut pas le préciser, comme ça mongo s'en charge tout seul
	name		: String,
	item_order	: Number,
	_fk_user_id	: { type: Schema.Types.ObjectId, ref: 'user' },
	last_modification	: { type: Date, default: Date.now },
	visible		: {type: Number, default: 1}
}, {collection: "item"});

var ActionSchema = new Schema({
	_fk_item_id		: { type: Schema.Types.ObjectId, ref: 'item' },
	_fk_task_id		: { type: Schema.Types.ObjectId, ref: 'task' },
	//history : [{
		_fk_user_id		: { type: Schema.Types.ObjectId, ref: 'user' },
		_fk_state_id	: { type: Schema.Types.ObjectId, ref: 'state' },
		comment			: { type: String, default: "" },
		creation_date	: { type: Date, default: Date.now }
	//}]
}, {collection: "action"});



/*


UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
}); 
UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


*/

exports.mongoose = mongoose;
exports.Schema = Schema;

exports.UserSchema = UserSchema;
exports.StateSchema = StateSchema;
exports.ActionSchema = ActionSchema;
exports.ItemSchema = ItemSchema;
exports.TaskSchema = TaskSchema;

exports.UserModel = mongoose.model('user', UserSchema);
exports.StateModel = mongoose.model('state', StateSchema);
exports.ActionModel = mongoose.model('action', ActionSchema);
exports.ItemModel = mongoose.model('item', ItemSchema);
exports.TaskModel = mongoose.model('task', TaskSchema);









