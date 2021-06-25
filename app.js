var express = require('express');
var logger = require('morgan');

var router = require('./routes/routes.js');

var app = express();



app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.use(function (req, res, next) {
  next();
});


module.exports = app;
