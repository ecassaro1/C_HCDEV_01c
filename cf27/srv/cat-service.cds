using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;

    function getHello (to:String) returns String;

    type Product {
        ProductID: Integer;
        ProductName: String;
    }

    function getNwProducts() returns array of Product;
}
