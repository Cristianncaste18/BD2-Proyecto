async function indexBanco(req, res){
  res.render('banco', {hola:"Mundo Banco"});
}

async function getOperacionesBanco(req, res){
    res.send('Get operaciones por banco');
}
  
async function getTotalesBanco(req, res){
  // Totales de credito y debito  
  res.send('Totales de credito y debito');
}
  
module.exports = {
  indexBanco,
  getOperacionesBanco,
  getTotalesBanco
}