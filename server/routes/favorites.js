var express = require('express');
var router = express.Router();
var Favorite = require('../models/favorites');

// // Another option to make router
// var router = require('express').Router();

router.get('/', function(req, res) {
  Favorite.find({}, function(err, favorites) {
    if(err) {
      console.log('There was an error with the favorites find', err);
      res.sendStatus(500);
    } else {
      res.send(favorites);
    }
  });
});

router.post('/', function(req, res) {
  var newMovieObject = req.body;
  console.log(newMovieObject);
  newMovie = new Favorite(newMovieObject);
  newMovie.save(function(err) {
    if(err) {
      console.log('Error posting new favorite', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

module.exports = router;
