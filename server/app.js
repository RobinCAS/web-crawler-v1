var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var morgan = require('morgan');

var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

var models = require('./models');
models.sequelize.sync().then(function(){
  app.listen(9000, function() {
    console.log('***********************************');
    console.log('listening:', 9000);
    console.log('***********************************');
  });
});
