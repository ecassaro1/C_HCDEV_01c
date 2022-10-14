const cds = require('@sap/cds')

const dbClient = require('./modules/db-client.js');

module.exports = async function () {

    const { Books } = cds.entities ('my.bookshop');

    this.on('getBookTitle', async ({data:{ID}}) => {
        let title = "(não sei)";

        let book = await SELECT `title` .from (Books,ID);

        if (book) title = book.title;

        return "o título do livro de ID "+ID+" é... "+title;
    });

    this.on('getBookTitleHANA', async ({data:{ID}}) => {

        let book = await dbClient.getBook(ID);
        console.log("book="+book);

        return "o título do livro de ID "+ID+" é... "+(book?book.TITLE:'não achou');
    })
}