const {readProducts} = require("./modules/nwProxy");

module.exports = (srv)=>{
    srv.on ('getHello', async (req)=> {
        let helloString = `Hello ${req.data.to}!!`;

        console.log(req.data.to)

        return helloString;
    })

    srv.on ('getNwProducts', async (req)=> {
        let oProducts = await readProducts();

        let result = oProducts.map((entry)=>{
            return {
                ProductID: entry.productId,
                ProductName: entry.productName
            }
        });

        return result;
    })
}
