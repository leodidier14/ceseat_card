var express = require('express');
var logger = require('morgan');



const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const mongoose = require('mongoose');
//Connect to db
mongoose.connect(process.env.DB_MONGO_CONNECT, {useNewUrlParser: true}, () =>
    console.log("connected to database")
);

const route = '/api/board/'
//######### Display name and version ############// 
const apiinf = require('./models/apiinfo')
var pjson = require('./package.json');
console.log("name : " + pjson.name);
console.log("version : " + pjson.version);
const apiinfos = apiinf.findOneAndUpdate({name: pjson.name, port: process.env.PORT, path:route }, {version : pjson.version}, {upsert: true}).exec()
//################################################//





var router = require('./routes/routes.js');

var app = express();

const requestLog = require('./models/requestLog')
app.use((req,res,next) => {
  requestLog.create({name:pjson.name,date: Date.now()}, (err)=> {
    if(err) console.log(err)
  })
  next()
})

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route, router);

app.use(function (req, res, next) {
  next();
});


module.exports = app;
