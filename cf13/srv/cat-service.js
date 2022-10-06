const cds = require('@sap/cds')
module.exports = async function () {
    const { Books } = cds.entities ('my.bookshop');

    this.after('READ', `Books`, (each) => {

        let enh = each;

        enh.title = enh.title + " mais algo";

        return enh;
    })

    this.on('sum', ({ data: { x, y } }) => x + y)

    this.on('getBookTitle', async ({data:{ID}}) => {
        let title = "(não sei)";

        let book = await SELECT `title` .from (Books,ID);

        if (book) title = book.title;

        return "o título do livro de ID "+ID+" é... "+title;
    })
}