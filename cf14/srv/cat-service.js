const cds = require('@sap/cds');
const { Book } = cds.entities ('my.bookshop');
//const { Order } = cds.entities ('my.bookshop');

//module.exports = async function () {
module.exports = async function AdminService() {
    this.on('order', async ({params:[key],data:{qty}}) => {
        console.log("order " + key.ID + " action with qty="+qty );

        let book = await SELECT `*` .from (Book,key);

        console.log("book.stock="+book.stock);

        if (book.stock<qty) {
            console.log("Insufficient stock:"+book.stock);
            return book;
        }
        
        await UPDATE (Book,{ID:key.ID})
        .with ({
            stock: {'-=': qty}
        });

        book = await SELECT `*` .from (Book,key);

        return book;
    })
}