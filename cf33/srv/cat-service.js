const cds = require('@sap/cds');

module.exports = function (app) {
  app.after(`READ`,`Authors`, (authors)=>{
    console.log(authors);

    authors.forEach(author => {
      const books = author.books; // acessando a propriedade books, direto pela association
      const qty = books.length;
      author.name = `${author.name} : has ${qty} books`;
    });
  });

  app.on(`READ`,`Gifts`, (req)=>{
    const result = [{name: 'booklet', price: 10}, {name: 'pen', price: 1}];
    return result;
  });
  
  app.on(`READ`,`AuthorsEnhanced`, async (req)=>{
    const { Authors, Books } = cds.entities;

    const authors = await cds.read(Authors);
    const books = await cds.read(Books); //acessa os livros do author, mas por fora da association

    const result = authors.map(author => {
        const authorBooks = books.filter(book => book.author_ID === author.ID);
        author.qtBooks = authorBooks.length;
        return author;
    });

    return result;
  });
}