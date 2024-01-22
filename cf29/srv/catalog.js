const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const cf26 = await cds.connect.to('cf26');

    this.on('READ', 'Books', async req => {
        console.log('on read books')
        
        return cf26.run(req.query);
    });

});
