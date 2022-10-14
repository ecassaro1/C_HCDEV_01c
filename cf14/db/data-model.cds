namespace my.bookshop;

@cds.autoexpose
@odata.draft.enabled
entity Book {
    key ID     : Integer;
        title  : String;
        stock  : Integer;
        author : Association to Author;
}

@cds.autoexpose
entity Author {
    key ID    : Integer;
        name  : String;
        books : Association to many Book
                    on books.author = $self;
}

@cds.autoexpose
entity Order {
    key ID: Integer;
        book: Association to Book;
        qty: Integer;
}
