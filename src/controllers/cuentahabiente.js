const { getTransactions } = require("../db/cuentahabiente")

async function indexCthabiente(req, res){
  /*Pueden ser todas o por mes*/
  //res.send('Get operaciones por cuenta habiente [por mes]');
  res.render('cuentahabiente',{transacciones:[]})
}

async function getOperacionesCthabiente(req, res){
    console.log(`REQUEST:: ${JSON.stringify(req.body,null,2)}`)
    const r = await getTransactions(req.body.cui);
    console.log(r.rows)
    res.render('cuentahabiente',{transacciones:r.rows})
}

module.exports = {
  indexCthabiente,
  getOperacionesCthabiente
}