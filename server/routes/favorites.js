var express = require('express');
var router = express.Router();

// // Another option to make router
// var router = require('express').Router();

router.get('/', function(req, res) {
  res.send('You hit the favorites GET!')
});

router.post('/', function(req, res) {
  res.send('You hit the favorites POST!')
});

module.exports = router;
