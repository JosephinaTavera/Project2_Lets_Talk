var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')



router.post('/',function(req,res){
	Topic.find({}, function(err,topic){
	res.render('topic.html.ejs', {
		list: topic 
	})
})
	})



// Topic




router.post('/new', function(req,res){
		Topic.create(req.body,function(err, data){

		res.redirect('/index/topic/username')
	})
})

// Topic Search
router.post('/search/:username', function(req,res){
		// attempting search
		//     phrase = '/' + req.body.title + '/i' ;
		//     searchPhrase = {title: phrase};
		//      console.log(searchPhrase);
		// The following format does work
		// Topic.find({title: /Raffle/i}, function(err, data){
		Topic.find(req.body,function(err, data){
		res.render('index.html.ejs',{
			list: data,
			user: req.params.username
		})
	})
})


module.exports = router;