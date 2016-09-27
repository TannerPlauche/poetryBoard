var express = require('express');
var poemRouter = express.Router();
var mongoose = require('mongoose');
var Poem = require('../models/poem');

poemRouter.route('/')
  .get(function (req, res) {
    Poem.find(function (err, poems) {
      if (err) res.status(500).send(err);
      res.send(poems);
    })
  });

poemRouter.route('/:poemId')
  .get(function (req, res) {
    Poem.findById(req.params.poemId, function (err, poem) {
      if (err) res.status(500).send(err);
      console.log(poem);
      console.log(req.params.poemId);
      res.send(poem);
    });
  });

poemRouter.route('/category/:categoryId')
  .get(function (req, res) {
    console.log(req.user);
    Poem.find({
      category: req.params.categoryId
    })
    .populate('submitter')
    .exec(function (err, poems) {
      if (err) res.status(500).send(err);
      res.send(poems);
    });
  });

module.exports = poemRouter;