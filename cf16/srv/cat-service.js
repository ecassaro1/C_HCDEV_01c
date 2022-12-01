const cds = require('@sap/cds')
module.exports = function (){
  this.after ('READ','Lps', (each)=>{
    each.title = "TESTE";
  })
}