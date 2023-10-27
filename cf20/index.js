const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World from CF20!!!" }));
})

app.get('/rota1', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World Backend from rota1!!!" }));
})

app.post('/mostraJSON', function (req,res) {
  res.json({requestBody: req.body})
})

app.post('/attrAccess', function (req,res) {
  let title = "nada";

  let ra = req.body.responseArray;

  for (let i=0;i<ra.length;i++) {
    if (ra[i].id==2) {
      title = ra[i].title;
    }
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ title: title }));
})


app.get('/multi', function (req,res) {
  let inValue = req.query.value;
  //console.log('req.params='+JSON.stringify(req.query));

  let outValue = ( inValue * 2 );

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result: outValue.toString() }));
})


app.listen(8080);