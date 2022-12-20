const request = require('request');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/cf1Cred', async function (req, res) {
    let result = await getCf1Cred();
    res.send(result);
})
app.get('/getEnv', async function (req, res) {
    let response = await getEnv();
    res.send(response);
})

const getEnv = async () => {
    var xsenv = require('@sap/xsenv');

    xsenv.loadEnv();
    let srv = xsenv.readServices();
    //console.log(srv);
    return srv;
}

const getCf1Cred = async () => {
    const sDestinationName = 'cf11-dest';
    const sEndpoint = '/';

    let vcap_services = await getEnv();

    let credentials = vcap_services[sDestinationName].credentials;
    const uaa_service = vcap_services['cf11-auth'];
    const sUaaCredentials = credentials.clientid + ':' + credentials.clientsecret;

    const post_options = {
        url: uaa_service.credentials.url + '/oauth/token',
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(sUaaCredentials).toString('base64'),
            'Content-type': 'application/x-www-form-urlencoded'
        },
        form: {
            'client_id': credentials.clientid,
            'grant_type': 'client_credentials'
        }
    }

    request(post_options, (err, res, data) => {
        if (res.statusCode === 200) {

            /*************************************************************
             *** Step 3: Search your destination in the destination service ***
             *************************************************************/
            const token = JSON.parse(data).access_token;
            const get_options = {
                url: credentials.uri + '/destination-configuration/v1/destinations/' + sDestinationName,
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }

            request(get_options, (err, res, data) => {

                const oDestination = JSON.parse(data);
                //const token = oDestination.authTokens[0];

                const options = {
                    method: 'GET',
                    url: oDestination.destinationConfiguration.URL + sEndpoint
                };

                request(options).on('data', (s) => {
                    console.log(s.toString())
                });
            });
        }
    });
}


app.listen(8081)