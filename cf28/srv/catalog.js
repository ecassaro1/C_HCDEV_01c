const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const nw = await cds.connect.to('nw');

    this.on('READ', 'Products', async req => {
        return nw.run(req.query);
    });

});
