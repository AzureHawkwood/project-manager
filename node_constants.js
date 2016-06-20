
var mysql_db_host = process.env.OPENSHIFT_MYSQL_DB_HOST || "localhost";
var mysql_db_port = process.env.OPENSHIFT_MYSQL_DB_PORT || 3306;
var mysql_db_user = process.env.OPENSHIFT_MYSQL_DB_USERNAME || "root";
var mysql_db_password = process.env.OPENSHIFT_MYSQL_DB_PASSWORD || "";
var mysql_db_database = process.env.OPENSHIFT_APP_NAME || "project_manager";

var mongo_db_host = process.env.OPENSHIFT_MONGODB_DB_HOST || "localhost";
var mongo_db_port = process.env.OPENSHIFT_MONGODB_DB_PORT || 27017;
var mongo_db_user = process.env.OPENSHIFT_MONGODB_DB_USERNAME || "admin";
var mongo_db_password = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || "admin";
var mongo_db_database = process.env.OPENSHIFT_APP_NAME || "project_manager";
var mongo_db_url = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://"+mongo_db_host+":"+mongo_db_port+"/"+mongo_db_database;

var secret = "monsecrethuhu";

exports.mysql_db_host = mysql_db_host;
exports.mysql_db_port = mysql_db_port;
exports.mysql_db_user = mysql_db_user;
exports.mysql_db_password = mysql_db_password;
exports.mysql_db_database = mysql_db_database;


exports.mongo_db_host = mongo_db_host;
exports.mongo_db_port = mongo_db_port;
exports.mongo_db_user = mongo_db_user;
exports.mongo_db_password = mongo_db_password;
exports.mongo_db_database = mongo_db_database;
exports.mongo_db_url = mongo_db_url;

exports.secret = secret;







