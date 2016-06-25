var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');

// Post from Start
router.post('/', function(req,res){
		User.create(req.body,function(err, data){
		res.redirect('/index/username');
	})
})

// Start
router.get('/', function(req,res)
{
	res.render('home.html.ejs');

});


// index page
router.get('/:username', function(req,res){
	User.find({}, function(err,name){
		res.render('index.html.ejs',{
			list: name
		});
	})
		
});

// Topic
router.post('/topic', function(req,res)
{
	res.render('topic.html.ejs');

});

router.post('/topic/new', function(req,res){
		Topic.create(req.body,function(err, data){
		res.redirect('/index/username')
	})
})


module.exports = router;