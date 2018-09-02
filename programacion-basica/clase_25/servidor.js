var express = require('express');
var app = express();

app.get('/', home)

function home(req, res) {
  res.send('Hello World');
}

app.listen(8989);
