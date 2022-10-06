using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;

    function sum (x:Integer, y:Integer) returns Integer;
    //exemplo .../catalog/sum(x=1,y=2)

    function getBookTitle (ID:Integer) returns String;
    //exemplo .../catalog/getBookTitle(ID=1)
}