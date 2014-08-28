//server.js--server side entry code
'use strict';
//Packages
var express = require('express');

module.exports = exports = function() {

  var app = express();

//Static page directory and client side code location settings
  app.use(express.static(__dirname + '/'));

//set environment variables
  var port = process.env.PORT || 8080;

//Pre routing
  var router = express.Router();

//Do this for every route/request
  router.use(function (req, res, next) {
    console.log('There was a server request');
    next(); //go on to specific route
  });

// display landing page
  app.get('/', function (req, res) {
    res.set('Status', '200');
    res.render('index.html');
  });

  app.listen(port);
  console.log('Listening on port ' + port);
};