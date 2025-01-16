using my.bookshop as my from '../db/data-model';

service CatalogService {
    entity Books as projection on my.Books;
    @readonly entity Authors as projection on my.Authors;
    @readonly entity Gifts as projection on my.Gifts;
    @readonly entity BooksFromCharlotte as projection on my.BooksFromCharlotte;
}