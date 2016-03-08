var server = require('express');
var path = require('path');
var getter = require('./mymodule/mymodule.js');
var app = server();

var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

getter(app);
