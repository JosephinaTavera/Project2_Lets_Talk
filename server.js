
// express 
var express = require('express');
var app = express(); 

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Mongoose
var mongoose = require('mongoose');
mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/jakesdb'
var db = mongoose.connection;
mongoose.connect(mongoUri);
db.once('open', function(){
	console.log('Connected to mongodb');
});

// server
var port = process.env.PORT || 3000;
app.listen(port, function()
{
	console.log('Connected to server');
});


var indexController = require('./controllers/indexController.js');
app.use('/index', indexController);

var topicController = require('./controllers/topicController.js');
app.use('/topic', topicController);

var commentController = require('./controllers/commentController.js');
app.use('/comment', commentController);
