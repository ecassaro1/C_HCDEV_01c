service BooksConsumerService {
    function getHello (to:String) returns String;
 
    type Book {
        ID : Integer;
        title  : String;
        stock  : Integer;
    }
  
    function getCF38aBooks() returns array of Book;
}