namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  author : Association to Authors;
}

entity Authors {
  key ID : Integer;
  name   : String;
  qtyBooks: Integer;
  books  : association to many Books on books.author = $self;
}

entity Gifts {
    key ID : Integer;
    name : String;
    stock : Integer;
}

entity BooksFromCharlotte {
    key ID : Integer;
    title : String;
}