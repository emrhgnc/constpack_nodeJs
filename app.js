var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('Controllers/UserController');
app.use('/', UserController);

var ProjectController = require('./Controllers/ProjectController');
app.use('/', ProjectController);


module.exports = app;
