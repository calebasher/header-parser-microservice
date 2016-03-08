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
      ipaddress: req.headers['x-forwarded-for'],
      language: req.headers["accept-language"].split(',')[0],
      software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    });
});