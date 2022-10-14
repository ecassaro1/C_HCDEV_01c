let hanaClient = require("@sap/hana-client");
let hanaClientPromise = require("@sap/hana-client/extension/Promise.js");
let xsenv = require("@sap/xsenv");

exports.getBook = async (ID)=> {
    let book = {
        title: "some title"
    };

    try {
        xsenv.loadEnv()
        let hanaOptions = xsenv.getServices({
            hana: {
                label: "hana"
            }
        })
        let conn = hanaClient.createConnection()
        let connParams = {
            serverNode: hanaOptions.hana.host + ":" + hanaOptions.hana.port,
            uid: hanaOptions.hana.user,
            pwd: hanaOptions.hana.password,
            ca: hanaOptions.hana.certificate,
            encrypt: hanaOptions.hana.encrypt,
            sslValidateCertificate: hanaOptions.hana.sslValidateCertificate
        }
        await hanaClientPromise.connect(conn, connParams)

        let dbQuery = 
            'SELECT TITLE FROM '
            + '"' 
            + hanaOptions.hana.schema
            + '"'
            + '."MY_BOOKSHOP_BOOKS" '
            + 'WHERE ID = '+ID;
        console.log("dbQuery="+dbQuery);

        let result = await hanaClientPromise.exec(conn, dbQuery)
        conn.disconnect()
        return result[0];

    } catch (error) {
        throw error
    }

    return book;
};