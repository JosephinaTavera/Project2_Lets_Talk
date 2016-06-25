var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


router.post('/:username', function(req,res){
		User.create(req.body,function(err, data){
		res.redirect('/index/username')
	})
})


// Start
router.get('/', function(req,res)
{
	res.render('home.html.ejs');

});


router.get('/:username', function(req,res){
		res.render('index.html.ejs',{
		});
});

module.exports = router;