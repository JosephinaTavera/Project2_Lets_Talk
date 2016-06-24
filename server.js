
// express 
var express = require('express');
var app = express(); 

// server
var port = process.env.PORT || 3000
app.listen(port, function(){
	console.log('Connected to server');
});