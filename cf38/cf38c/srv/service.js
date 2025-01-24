"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksConsumerService = void 0;
const cds_1 = __importDefault(require("@sap/cds"));
const { readBooks } = require('./modules/cf38aProxy');
class BooksConsumerService extends cds_1.default.ApplicationService {
    init() {
        this.on('getHello', async (req) => {
            let helloString = `Hello ${req.data.to}!!`;
            console.log(req.data.to);
            return helloString;
        });
        this.on('getCF38aBooks', async (req) => {
            // const fakeResult = [
            //     {
            //         ID: 1,
            //         title: 'Book 1 - fake',
            //     },
            //     {
            //         ID: 2,
            //         title: 'TWoW',
            //     },
            //     {
            //         ID: 3,
            //         title: 'The Doors of Stone',
            //     }
            // ]
            // return fakeResult;
            const oBooks = await readBooks();
            return oBooks;
        });
        // this.after('READ', Books, async (books,) => {
        //     books.forEach((book: typeof Book) => {
        //         book.title = `${book.title} : ${book.stock} in stock!!`;
        //     });
        //     return books;
        // });
        return super.init();
    }
}
exports.BooksConsumerService = BooksConsumerService;
//# sourceMappingURL=service.js.map