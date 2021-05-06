const db = require('../services/cassandra');

async function getTransactions(cui){
  return await db.query('SELECT * FROM transactions_by_cuentahabiente WHERE cui = ?',[cui])
}

async function getTransactionsByMonth(cui, fecha_ini, fecha_fin){
  const query = 'SELECT * from transactions_by_cuentahabiente_month WHERE cui = ? and fecha_generacion > \''+fecha_ini+'\' and fecha_generacion < \'' + fecha_fin + '\''
  return await db.query(query,[cui])
  ;
}

module.exports = {
  getTransactions,
  getTransactionsByMonth
}