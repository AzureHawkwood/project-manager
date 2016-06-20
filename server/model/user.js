var mongoose  = require("mongoose");
var bcrypt    = require("bcrypt-nodejs");
var Schema    = mongoose.Schema;

// define the schema for our user model
var userSchema = new Schema({

    local            : {
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
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

}, {collection: "user"});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);








