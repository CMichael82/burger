// Inside the burgers_controller.js file, import the following:

// Express
var express = require("express");

var router = express.Router();
// burger.js
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res){
	
		res.render("index");

});

// router.get("/", function(req, res){
// 	burger.selectAll(function(data){
// 		var hbsObject = {
// 			burgers: data
// 		};
// 		console.log(hbsObject);
// 		res.render("index", hbsObject);
// 	});
// });

// router.get('/', function(req, res) {
// 	res.send('im the home page!');  
// });



module.exports = router;