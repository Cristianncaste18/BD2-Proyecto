const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter:'datacenter1',
  keyspace: 'syst_data_2'
});

let db = {}

db.query = (query, params) => {
  return new Promise((resolve, reject) => {
    client.execute(query, params)
      .then(result => resolve(result));
  })
}

module.exports =  db;