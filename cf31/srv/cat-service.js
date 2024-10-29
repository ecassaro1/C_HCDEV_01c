const cds = require('@sap/cds');

const validateAuthor = async (req) =>{
    const {Authors} = cds.entities;
    const author = await cds.run(
        SELECT.from(Authors).where({ ID: req.data.author_ID })
    );
    return author.length > 0;
}

module.exports = function () {
    this.before('UPDATE', `Books`, async (req) => {
        const authorOk = await validateAuthor(req);

        if (!authorOk) {
            req.reject(400,'Author does not exist!!!');
        }
    })
    this.before('CREATE', `Books`, async (req) => {
        const authorOk = await validateAuthor(req);

        if (!authorOk) {
            req.reject(400,'Author does not exist!!!');
        }
    })
}