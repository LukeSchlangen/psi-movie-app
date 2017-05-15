var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var favorites = require('./routes/favorites');
var port = 5000;

app.use(express.static('public'));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/psi-movie-db');

mongoose.connection.on('connected', function() {
  console.log('We connected to the database! Hooray!');
});

mongoose.connection.on('error', function() {
  console.log('We did not connect to the database');
});

app.use('/favorites', favorites);

app.listen(port, function() {
  console.log('The server is listening on port', port);
});
