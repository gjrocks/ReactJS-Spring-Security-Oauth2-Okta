var path = require('path');
var express = require('express');

var app = express();

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