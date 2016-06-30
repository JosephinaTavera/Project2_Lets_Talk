var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')




// Topic
router.post('/topic/new', function(req,res)
{
	res.render('topic.html.ejs');

});

router.get('/topic', function(req,res)
{
	res.render('index.html.ejs');

});


router.post('/topic/new/add', function(req,res){
		Topic.create(req.body,function(err, data){

		res.redirect('/index/username')
	})
})

// Topic Search
router.post('/topic/search', function(req,res){
		// attempting search
		//     phrase = '/' + req.body.title + '/i' ;
		//     searchPhrase = {title: phrase};
		//      console.log(searchPhrase);
		// The following format does work
		// Topic.find({title: /Raffle/i}, function(err, data){

		Topic.find(req.body,function(err, data){
			console.log(data);
		res.redirect('/topic/username')
	})
})


module.exports = router;