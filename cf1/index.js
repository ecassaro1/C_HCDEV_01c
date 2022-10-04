const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World Backend!!!" }));
})

app.get('/rota1', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Hello World Backend from rota1!!!" }));
  })

app.listen(8080);