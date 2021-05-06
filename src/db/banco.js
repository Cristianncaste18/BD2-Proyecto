const db = require('../services/cassandra');

async function getDebitoBanco(banco){
  const query = `SELECT name_inst, SUM(amount) as "debito" FROM transactions_by_fi_tipotransaction WHERE name_inst = ? AND tipo_transaction = 'Debito'`
  return await db.query(query,[banco])
}

async function getCreditoBanco(banco){
  const query = `SELECT name_inst, SUM(amount) as "credito" FROM transactions_by_fi_tipotransaction WHERE name_inst = ? AND tipo_transaction = 'Credito'`
  return await db.query(query,[banco])
}

async function getTransactionsBanco(banco){

}

module.exports = {
    getCreditoBanco,
    getDebitoBanco,
}