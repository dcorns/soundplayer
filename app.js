'use strict';
//Declare server.js as a function [ module.exports = exports = function ]
var server = require('./server.js');
var router = require('./router.js');

server();

router.test();

router.test2();