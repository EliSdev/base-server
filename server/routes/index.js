var apiApp = require('express')();

// api entrypoint for testing propose
apiApp.all('/', function(req, res) {
  res.status(200).send({
    success: true,
    message: 'api application entrypoint.'
  }).end();
});

// registering the routes
apiApp.use('/company', require('./company'));
apiApp.use('/user', require('./user'));


// Default route when not meets any specified path
apiApp.get('*', function(req, res) {
  res.status(404).send({
    Error: true, Message: 'Resource Not Found.'
  }).end();
});

module.exports = apiApp;
