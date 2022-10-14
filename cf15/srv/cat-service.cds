using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;

    function getBookTitle (ID:Integer) returns String;
    //exemplo .../catalog/getBookTitle(ID=1)

    function getBookTitleHANA (ID:Integer) returns String;
}