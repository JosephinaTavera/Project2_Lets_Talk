var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')


Comment
router.post('/comment', function(req,res)
{
		res.redirect('/topic/:topicid/comment');
});

router.get('topic/:id/comment', function(req,res){
	Topic.find({},function(err,topic){
		res.render('comment.html.ejs', {
			list: topic
		})
});
});


router.post('comment/new', function(req,res){
	res.redirect('comment/new');
})

router.get('comment/new', function(req,res){
		console.log('Hello' + req.params);
	res.render('newcomment.html.ejs');
})

router.post('comment/new', function(req,res){
		Comment.create(req.body,function(err, data){
		res.redirect('/comment')
	})
})

router.post('comment/search', function(req,res){
		// attempting search
		//     phrase = '/' + req.body.title + '/i' ;
		//     searchPhrase = {title: phrase};
		//      console.log(searchPhrase);
		// The following format does work
		// Topic.find({title: /Raffle/i}, function(err, data){

		Comment.find(req.body,function(err, data){
			console.log(data);
		res.redirect('/comment')
	})
})






module.exports = router;