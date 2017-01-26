var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({
      extended: true
}))
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

//app.use(express.static(path.join(__dirname + '/client/public')));
app.use(express.static(__dirname + '/client/dist'));

app.listen(port, () => {
  console.log('listening on port: ', port);
});
