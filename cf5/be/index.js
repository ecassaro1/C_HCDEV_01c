const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World Backend (cf5be)!!!" }));
})

app.get('/Ent1', async function (req, res) {
    let rows = await getEnt1();
    res.send(rows);
})


const getEnv = async ()=>{
    var xsenv = require('@sap/xsenv');

    xsenv.loadEnv();
    let srv = xsenv.readServices();
    //console.log(srv);
    return srv;
}

const getEnt1 = async ()=>{
    var hana = require('@sap/hana-client');

    let vcap_services = await getEnv();

    let credentials = vcap_services['cf5_hdi_db'].credentials;

    var connOptions = {
        serverNode: credentials.host+":"+credentials.port,
        encrypt: 'true',
        sslValidateCertificate: 'false',
        uid: credentials.user,
        pwd: credentials.password
    };
    
    var connection = await hana.createConnection();

    connection.connect(connOptions);

    var sql = 
        'SELECT * FROM '
        + '"' 
        + credentials.schema
        + '"'
        + '."ENT1"';
    console.log(sql);

    var rows = await connection.exec(sql);

    return rows;
}


app.listen(8080);