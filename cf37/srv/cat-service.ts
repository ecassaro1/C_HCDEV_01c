import cds from '@sap/cds';
const { Books, Book } = require('#cds-models/CatalogService');
const { BookEntity2 } = require('./entities/book-entity');

export class CatalogService extends cds.ApplicationService {
    init() {
        this.after('READ', Books, async (books) => {

            books.forEach((book: typeof Book) => {
                const oBook = new BookEntity2(book);
                book.title = oBook.getUpdatedTitle();
            });
            return books;
        });

        return super.init();
    }
}
