const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World from CF22!!!" }));
})

app.post('/approverRetrieve', function (req,res) {
  let oJSON = JSON.parse(req.body.inputValue);

  let oApproval = {
    userId: "",
    timestamp: ""
  };

  let ra = oJSON.result.responseArray;

  for (let i=0;i<ra.length;i++) {
    let task = ra[i];
    if (  
          task.type=="USERTASK_COMPLETED"
      &&  task.subject=="Aprovar Pedido"
    ) {
      oApproval.userId = task.userId;
      oApproval.timestamp = task.timestamp;
      break;
    }
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ approval: oApproval }));
})

app.listen(8080);