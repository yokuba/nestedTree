var express = require('express');
var app = express();
app.use(express.static('index'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://localhost', port);
});