const fetch = require('node-fetch');
const xsenv = require('@sap/xsenv');

/*
let service = {
    credentials: {
        uaa: {
            clientid: 'sb-cap2-7601e67ftrial-dev!t205168',
            clientsecret: 'B6un08L8bAjLyWSun7MeuSshQGk=',
            url: 'https://7601e67ftrial.authentication.us10.hana.ondemand.com/oauth/token'
        }
    }
}
*/

xsenv.loadEnv();
const services = xsenv.filterServices({ name: 'cap2-auth' });
console.log(services);
const service = services[0];

async function getHello(to) {
    let result = 'Fake Hello '+to;

    const serviceUrl = "https://7601e67ftrial-dev-cap2-srv.cfapps.us10-001.hana.ondemand.com/";
    const path = `odata/v4/say/hello(to='${to}')`;
    //const path = "odata/v4/catalog/Books";
    const jwtToken = await getJWTTokenWorkflow();

    let headers = new fetch.Headers({
        'Content-Type': 'application/json'
    });

    //console.log("jwt="+jwtToken);

    let basicAuthorization = `Bearer ${jwtToken}`;

    headers.set("Authorization", basicAuthorization);

    const response1 = 
        await fetch(
            serviceUrl + path, 
            { 
                method: 'GET', 
                headers: headers 
            }
        );

    //console.log("response1="+await response1.text());
    const response2 = await response1.json();

    result = response2;

    return result;
}

async function getJWTTokenWorkflow() {
    const credentials = service.credentials;
    /*
    const clientId = credentials.uaa.clientid;
    const secret = credentials.uaa.clientsecret;
    const authUrl = credentials.uaa.url;
    */
    const clientId = credentials.clientid;
    const secret = credentials.clientsecret;
    const authUrl = credentials.url;
    const headers = new fetch.Headers();
    let authorization = `Basic ${Buffer.from(clientId + ':' + secret).toString("base64")}`;
    headers.set("Authorization", authorization);
    let url = authUrl + '/oauth/token?grant_type=client_credentials&response_type=token';
    const result = await fetch(url, { method: 'GET', headers: headers }).then((res)=>{
      return res.json()
    });
    return result.access_token;
}

module.exports = {
    getHello: getHello
}