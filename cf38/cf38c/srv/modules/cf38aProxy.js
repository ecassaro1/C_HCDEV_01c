const {cf38A} = require("../external/cf38a");

async function readBooks() {
    const { booksApi } = cf38A();

    return booksApi.requestBuilder()
      .getAll()
      .execute({ destinationName: 'cf38a-dest' });
}

module.exports = {
    readBooks: readBooks
}