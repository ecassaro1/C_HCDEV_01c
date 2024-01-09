module.exports = (tst)=>{
    tst.on ('getHelloLocal', (req)=> {
        debugger

        let helloString = 'Hello local ' + req.data.to + ' from cap4!!!';

        return helloString;
    })

    tst.on ('getHelloRemote', (req)=> {
        //mas não será chamado... a página index.html direciona para o 'backend/...', e o approuter
        //redireciona para a destination do cap2

        let helloString = 'to be implemented... buscar do cap2... fazer o fetch';

        return helloString;
    })
}
