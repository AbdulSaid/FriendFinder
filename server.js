// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Setting up Express app

var app = express();
var PORT = 3000;

// Set up the Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes for the server to give a "map" of how to respond on user visit or request of data

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starting server to begin listening

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
