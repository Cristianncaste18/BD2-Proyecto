const BigDecimal = require('cassandra-driver').types.BigDecimal;
const { getCreditoBanco, getDebitoBanco } = require("../db/banco");

async function indexBanco(req, res){
  res.render('banco',{
    banco:{
      name: '',
      debito: 0,
      credito: 0,   
    },
    transacciones:[]
  })
}

async function getOperacionesBanco(req, res){
    res.send('Get operaciones por banco');
}
  
async function getTotalesBanco(req, res){
  console.log(`REQUEST:: ${JSON.stringify(req.body,null,2)}`)
  let credito = await getCreditoBanco(req.body.banco)
  let debito = await getDebitoBanco(req.body.banco)
  credito = credito.rows[0]['credito'].toNumber();
  debito = debito.rows[0]['debito'].toNumber();
  res.render('banco',{
    banco:{
      name: req.body.banco,
      debito,
      credito,   
    },
    transacciones:[]
  })
}
  
module.exports = {
  indexBanco,
  getOperacionesBanco,
  getTotalesBanco
}