var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var unless = require('express-unless');

var config = require('./config');
var authRoutes = require('./routes/authRoutes');
var poemRoutesGetOnly = require('./routes/poemRoutesGet');

var poemRoutes = require('./routes/poemRoutes');

var port = process.env.PORT || 9000;
mongoose.connect(config.database, function(){
	console.log('Mongoose connected to DB.')
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());

app.use('/poemboard', poemRoutesGetOnly);
app.use('/poemboard/auth', authRoutes);
app.use('/poemboard/api', expressJwt({
	secret: config.secret
}));
app.use('/poemboard/api/userpoem', poemRoutes);

app.listen(port, function () {
	console.log('Reached Port ' + port);
});