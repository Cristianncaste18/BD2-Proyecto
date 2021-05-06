const db = require('../services/cassandra');

async function getTransactions(cui){
  return await db.query('SELECT * FROM transactions_by_cuentahabiente WHERE cui = :cui',[cui])
}

async function getTransactionsByMonth(cui,month){

}

module.exports = {
  getTransactions,
  getTransactionsByMonth
}
  //query = 'SELECT * FROM cuentahabiente_by_fi'
  //const r = await db.query(query,[])
  //console.log(r)
  //res.json({'Hola':'Mundo'})