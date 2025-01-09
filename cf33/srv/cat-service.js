const cds = require('@sap/cds');

module.exports = function (app) {
  app.after(`READ`,`Authors`, async (authors)=>{
    //console.log(authors);

    // acessando a propriedade books, direto pela association (só funciona se a query vier com a association no $expand)
    // authors.forEach(author => {
    //   const books = author.books; 
    //   const qty = books.length;
    //   author.name = `${author.name} : has ${qty} books`;
    // });

    // // Access the books association directly (not working) (gerado pelo copilot)
    // const tx = cds.tx();
    // for (let author of authors) {
    //     const books = await tx.read(author.books);
    //     const qty = books.length;
    //     author.name = `${author.name} : has ${qty} books!!`;
    // }
    
    //acessa os livros do author, mas por fora da association
    const { Books } = cds.entities;

    const books = await cds.read(Books);

    authors.forEach(author => {
        const authorBooks = books.filter(book => book.author_ID === author.ID);
        const qty = authorBooks.length;
        author.qtyBooks = qty;
    });       
  });

  app.on(`READ`,`Gifts`, (req)=>{
    const result = [{ID: 1, name: 'booklet', stock: 10}, {ID: 2, name: 'pen', stock: 1}];
    return result;
  });

  app.on(`READ`,`BooksFromCharlotte`, async (req)=>{
    const { Books } = cds.entities;

    //acesso via SELECT

    var query = SELECT.from(Books)
      .columns([
        "ID",
        "TITLE"
      ])
      .where({ author_ID: 2 })

    const books = await cds.run(query);

    return books;
  });
}