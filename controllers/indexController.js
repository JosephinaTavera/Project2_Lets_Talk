var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')

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
	Topic.find({}, function(err,title){
		res.render('index.html.ejs',{
			list: title
		});
	})
		
});

// Comment
router.post('/topic/:topicid/comment', function(req,res)
{
		res.redirect('/index/topic/:topicid/comment');
});

router.get('/topic/:topicid/comment', function(req,res){
	console.log(req.body)
	Topic.find({},function(err,topic){
		res.render('comment.html.ejs', {
			list: topic
		})
});
});


router.post('/topic/:topicid/comment/new', function(req,res){
	// 	Comment.create(req.body,function(err, data){
	// 	res.redirect('/topic/:topicid/comment')
	// })
	res.render('newcomment.html.ejs');
})

router.post('/topic/:topicid/comment/search', function(req,res){
		// attempting search
		//     phrase = '/' + req.body.title + '/i' ;
		//     searchPhrase = {title: phrase};
		//      console.log(searchPhrase);
		// The following format does work
		// Topic.find({title: /Raffle/i}, function(err, data){

		Comment.find(req.body,function(err, data){
			console.log(data);
		res.redirect('/index/topic/:topicid/comment')
	})
})



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
		res.redirect('/index/username')
	})
})


module.exports = router;