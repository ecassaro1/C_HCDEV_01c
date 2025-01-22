import cds from '@sap/cds';
const { Books, Book } = require('#cds-models/CatalogService');

export class CatalogService extends cds.ApplicationService {
    init() {
        this.after('READ', Books, async (books,) => {

            books.forEach((book: typeof Book) => {
                book.title = `${book.title} : ${book.stock} in stock!!`;
            });
            return books;
        });

        return super.init();
    }
}

// module.exports = function (app) {
//     app.after(`READ`,`Books`, async (books)=>{ 
//         books.forEach(book => {
//             book.title = `${book.title} : ${book.stock} in stock`;
//         });
//     });
// }