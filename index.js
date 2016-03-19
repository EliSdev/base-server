// node_modules loadings
var express         = require('express');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var morgan          = require('morgan');
var helmet          = require('helmet');

// Env vars setting
process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Express application initialization
var app = express();

global.db = require("./server/model");

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/api', require('./server/routes'));
app.use(express.static(__dirname + '/client'));

app.disable('x-powered-by');

app.all('*', function(req, res, next) {
  res.redirect("/");
});

app.listen(process.env.PORT, function() {
  console.log('App is running on port ' + process.env.PORT);
});

exports = module.exports = app;
