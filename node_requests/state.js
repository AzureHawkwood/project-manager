var node_mysql_connection = require("../node_mysql_connection");
var connection = node_mysql_connection.mysql_connection;

exports.getStates = function(req, res, next){

    connection.query('SELECT * FROM state ORDER BY name asc', function(err, rows) {
	 	if (err) {
			console.log("Error Selecting : %s ",err );
		 	throw err;
		}
		
		res.send(rows);

		
	});
};