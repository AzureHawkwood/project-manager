var mysql = require("mysql");
var constants = require("./node_constants");

var mysql_pool = mysql.createPool({
		host:constants.host,
		user:constants.user,
		password:constants.password,
		database:constants.database
});


exports.mysql_connection = mysql_pool;
