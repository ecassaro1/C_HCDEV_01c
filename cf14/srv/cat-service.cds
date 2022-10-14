using my.bookshop as my from '../db/data-model';

@path : 'AdminService'
service AdminService {
    entity Book as projection on my.Book {
        *,
        author: redirected to Author
    } actions {
        action order (qty: Integer) returns Book;
    };

    entity Author  as projection on my.Author {
        *,
        books : redirected to Book
    };

    entity Order as projection on my.Order {
        *,
        book: redirected to Book
    };
}
