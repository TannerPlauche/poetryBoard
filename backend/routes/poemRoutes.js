var express = require('express');
var poemRoute = express.Router();
var mongoose = require('mongoose');
var Poem = require('../models/poem');

poemRoute.route('/')
	.get(function(req, res) {
		Poem.find({
			submitter: req.user._id
		}, function(err, poems) {
			if (err) res.status(500).send(err);
			res.send(poems);
		});
	})
	.post(function(req, res) {
		var poem = new Poem(req.body);
		poem.submitter = req.user;
		poem.save(function(err) {
			if (err) res.status(500).send(err);
			res.send(poem);
		});
	});


poemRoute.route('/:poemId')
	.get(function(req, res) {
		Poem.findOne({
			_id: req.params.poemId,
			submitter: req.user._id
		}, function(err, poem) {
			if (err) res.status(500).send(err);
			res.send(poem);
		});
	})
	.put(function(req, res) {
		Poem.findOneAndUpdate({
			_id: req.params.poemId,
			submitter: req.user._id
		}, req.body, {
			new: true,

		}, function(err, poem) {
			if (err) res.status(500).send(err);
			res.send(poem);
		});
	})
	.delete(function(req, res) {
		Poem.findOneAndRemove({
			_id: req.params.poemId,
			submitter: req.user._id
		}, function(err, poem) {
			if (err) res.status(500).send(err);
			res.send(poem);
		});
	});

module.exports = poemRoute;