var mysql = require("mysql");
var constants = require("./node_constants");



var mysql_connection = mysql.createConnection({
		host:constants.mysql_db_host,
		user:constants.mysql_db_user,
		port:constants.mysql_db_port,
		password:constants.mysql_db_password,
		database:constants.mysql_db_database
});


exports.mysql_connection = mysql_connection;