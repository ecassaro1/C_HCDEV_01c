const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World from CF21!!!" }));
})

app.post('/retornaJSON', function (req,res) {
  res.json({requestBody: req.body})
})

app.post('/approverRetrieve', function (req,res) {
  let oApproval = {
    userId: "",
    timestamp: ""
  };

  let ra = req.body.result.responseArray;

  for (let i=0;i<ra.length;i++) {
    let task = ra[i];
    if (  
          task.type=="USERTASK_COMPLETED"
      &&  task.subject=="Aprovar Pedido"
    ) {
      oApproval.userId = task.userId;
      oApproval.timestamp = task.timestamp;
    }
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ approval: oApproval }));
})


app.get('/multi', function (req,res) {
  let inValue = req.query.value;
  //console.log('req.params='+JSON.stringify(req.query));

  let outValue = ( inValue * 2 );

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result: outValue.toString() }));
})


app.listen(8080);