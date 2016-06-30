var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Topic = require('../models/topic.js');
var Comment = require('../models/comment.js')

// Post from Start
router.post('/', function(req,res){
		User.create(req.body,function(err, data){
			console.log(data.username);
		res.redirect('topic/' + data.username);
	})
})

// Start
router.get('/', function(req,res)
{
	res.render('home.html.ejs');

});





module.exports = router;