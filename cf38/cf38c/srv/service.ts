import cds from '@sap/cds';

const {readBooks} = require('./modules/cf38aProxy');

export class BooksConsumerService extends cds.ApplicationService {
    init() {
        this.on ('getHello', async (req)=> {
            let helloString = `Hello ${req.data.to}!!`;
    
            console.log(req.data.to)
    
            return helloString;
        });        

        this.on ('getCF38aBooks', async (req)=> {
            const oBooks = await readBooks();
            return oBooks;
        }); 
        
        return super.init();
    }
}