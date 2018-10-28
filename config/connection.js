// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "burgers_db"
});

connection.connect(function (err){
	if(err){
		console.error("Error Connecting: " + err.stack);
		return;
	}
	console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;



