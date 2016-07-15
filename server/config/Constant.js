module.exports = {

	NODE_PORT : process.env.OPENSHIFT_NODEJS_PORT || 8080,
	NODE_HOST : process.env.OPENSHIFT_NODEJS_IP || "192.168.1.88",

	MYSQL_DB_HOST : process.env.OPENSHIFT_MYSQL_DB_HOST || "192.168.1.88",
	MYSQL_DB_PORT : process.env.OPENSHIFT_MYSQL_DB_PORT || 3306,
	MYSQL_DB_USER : process.env.OPENSHIFT_MYSQL_DB_USERNAME || "root",
	MYSQL_DB_PASSWORD : process.env.OPENSHIFT_MYSQL_DB_PASSWORD || "",
	MYSQL_DB_DATABASE : process.env.OPENSHIFT_APP_NAME || "project_manager",

	MONGO_DB_HOST : process.env.OPENSHIFT_MONGODB_DB_HOST || "192.168.1.88",
	MONGO_DB_PORT : process.env.OPENSHIFT_MONGODB_DB_PORT || 27017,
	MONGO_DB_USER : process.env.OPENSHIFT_MONGODB_DB_USERNAME || "admin",
	MONGO_DB_PASSWORD : process.env.OPENSHIFT_MONGODB_DB_PASSWORD || "admin",
	MONGO_DB_DATABASE : process.env.OPENSHIFT_APP_NAME || "project_manager",
	MONGO_DB_URL : process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://192.168.1.88:27017/project_manager",

	SECRET : "MonSecret**HuHu_25_HoHo"
};







/*

const NODE_PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const NODE_HOST = process.env.OPENSHIFT_NODEJS_IP || "localhost";

const MYSQL_DB_HOST = process.env.OPENSHIFT_MYSQL_DB_HOST || "localhost";
const MYSQL_DB_PORT = process.env.OPENSHIFT_MYSQL_DB_PORT || 3306;
const MYSQL_DB_USER = process.env.OPENSHIFT_MYSQL_DB_USERNAME || "root";
const MYSQL_DB_PASSWORD = process.env.OPENSHIFT_MYSQL_DB_PASSWORD || "";
const MYSQL_DB_DATABASE = process.env.OPENSHIFT_APP_NAME || "project_manager";

const MONGO_DB_HOST = process.env.OPENSHIFT_MONGODB_DB_HOST || "localhost";
const MONGO_DB_PORT = process.env.OPENSHIFT_MONGODB_DB_PORT || 27017;
const MONGO_DB_USER = process.env.OPENSHIFT_MONGODB_DB_USERNAME || "admin";
const MONGO_DB_PASSWORD = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || "admin";
const MONGO_DB_DATABASE = process.env.OPENSHIFT_APP_NAME || "project_manager";
const MONGO_DB_URL = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://"+MONGO_DB_HOST+":"+MONGO_DB_PORT+"/"+MONGO_DB_DATABASE;

const SECRET = "MonSecret**HuHu_25_HoHo";


exports.MYSQL_DB_HOST = MYSQL_DB_HOST;
exports.MYSQL_DB_PORT = MYSQL_DB_PORT;
exports.MYSQL_DB_USER = MYSQL_DB_USER;
exports.MYSQL_DB_PASSWORD = MYSQL_DB_PASSWORD;
exports.MYSQL_DB_DATABASE = MYSQL_DB_DATABASE;


exports.MONGO_DB_HOST = MONGO_DB_HOST;
exports.MONGO_DB_PORT = MONGO_DB_PORT;
exports.MONGO_DB_USER = MONGO_DB_USER;
exports.MONGO_DB_PASSWORD = MONGO_DB_PASSWORD;
exports.MONGO_DB_DATABASE = MONGO_DB_DATABASE;
exports.MONGO_DB_URL = MONGO_DB_URL;

exports.SECRET = SECRET;
*/



