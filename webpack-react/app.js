var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '\\dist\\app')));

app.get('/*', function(req, res){
  res.sendFile("index.html", {root: path.join(__dirname, '\\dist')});
});

app.listen(8089, function() {
  console.log("App is running at localhost: 8089")
});