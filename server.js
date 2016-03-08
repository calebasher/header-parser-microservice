var server = require('express');
var path = require('path');
var os = require ('os');
var app = server();

var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function(req, res) {
     res.json({
      ipaddress: req.connection.remoteAddress.slice(-12),
      language: req.acceptedLanguages[0],
      software: os.release()
    });
});