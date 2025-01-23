
const { Book } = require('#cds-models/CatalogService');

export class BookEntity {
    protected data: typeof Book;

    constructor(data: typeof Book) {
        this.data = data;
    }

    getUpdatedTitle(): String {
        return `${this.data.title} : ${this.data.stock} in stock!!!`;
    }
}

export class BookEntity2 extends BookEntity { //herança
    getUpdatedTitle(): String { //sobrescrevendo o método da classe pai
        return `${super.getUpdatedTitle()} (extendido)`; 
    }
}