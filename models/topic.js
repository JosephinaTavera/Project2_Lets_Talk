var mongoose = require('mongoose'); 

var topicSchema = mongoose.Schema({
	title: String,
	vote: Number
});

var Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;