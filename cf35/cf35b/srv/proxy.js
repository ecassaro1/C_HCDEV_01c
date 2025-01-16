const cds = require('@sap/cds');
require('dotenv').config();

module.exports = function (app) {
    app.on(
        'getBook', async ({data:{ID}})=>{
            const url = `${process.env.BOOkS_URL}(${ID})`;

            const resBook = await fetch(url);
            const jsonBook = await resBook.json();

            return (jsonBook||'ops, not found');
        }
    );    
}
