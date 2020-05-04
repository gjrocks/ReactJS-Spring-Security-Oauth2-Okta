var path = require('path');
var express = require('express');
var args=require('yargs').argv;

var app = express();
console.log("Environment :",args.env);

var propertiesReader = require('properties-reader');
var propertiesPath=path.join(__dirname, '\\dist\\properties\\',args.env+'.properties');
console.log(propertiesPath);
var properties = propertiesReader(propertiesPath);

console.log('server.port',properties.get('server.port'));
app.use(express.static(path.join(__dirname, '\\dist\\app')));
// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

app.get('/*', function(req, res){
  res.sendFile("index.html", {root: path.join(__dirname, '\\dist')});
});

app.listen(8089, function() {
  console.log("App is running at localhost: 8089")
});