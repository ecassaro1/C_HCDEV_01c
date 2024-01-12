const {northwind} = require("../external/Northwind");

async function readProducts() {
    const { productsApi } = northwind();

    return productsApi.requestBuilder()
      .getAll()
      .execute({ destinationName: 'northwind' });
}

module.exports = {
    readProducts: readProducts
}