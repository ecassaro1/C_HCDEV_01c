const {getHello} = require("./modules/cap2Proxy");

module.exports = (tst)=>{
    tst.on ('getHello', async (req)=> {
        let helloString =
            await getHello(req.data.to);

        return helloString;
    })
}
