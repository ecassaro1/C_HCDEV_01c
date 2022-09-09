const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World Backend (cf4be)!!!" }));
})

app.listen(8080);