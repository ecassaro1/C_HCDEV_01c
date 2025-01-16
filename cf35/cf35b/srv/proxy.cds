type Books {
  ID : Integer;
  title  : String;
  stock  : Integer;
}

service Proxy {
    function getBook(ID: Integer) returns Books;
}