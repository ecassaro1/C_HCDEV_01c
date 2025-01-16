const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { Books } = this.entities;
	const service = await cds.connect.to('CatalogService');
	this.on('READ', Books, request => {
		return service.tx(request).run(request.query);
	});
});