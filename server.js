//Require express//
var express = require("express");
var app = express();

//Setup PORT and Data Parsing//
var PORT = process.env.PORT||8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Require & Setup for Handlebars//
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("veiw engine", "handlebars");

//Start SERVER listening//
app.listen(PORT, function(){
	console.log("Server listening on: http://localhost: "+ PORT);
});