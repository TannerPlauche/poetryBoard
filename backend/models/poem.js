var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = require('./user').schema;

var poemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	author: String,
	poemText: {
		type: String,
		required: true
	},
	submitter: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	category: {
		type: String,
		required: true,
		lowercase: true
	}
});

module.exports = mongoose.model('Poem', poemSchema);