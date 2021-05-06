const db = require('../services/cassandra');

async function addTransaction(){
  //const query = `SELECT name_inst, SUM(amount) as "debito" FROM transactions_by_fi_tipotransaction WHERE name_inst = ? AND tipo_transaction = 'Debito'`
  return await db.query(query,[banco])
}

module.exports= {
    addTransaction
}