const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World from CF19!!!" }));
})

app.get('/p/:tagId', function(req, res) {
  res.send("tagId is set to " + req.params.tagId);
});

app.get('/multi', function (req,res) {
  let inValue = req.query.value;
  //console.log('req.params='+JSON.stringify(req.query));

  let outValue = ( inValue * 2 );

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result: outValue.toString() }));
})

app.get('/rota1', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Hello World Backend from rota1!!!" }));
  })

app.listen(8080);