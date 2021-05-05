async function getOperacionesCthabiente(req, res){
    /*Pueden ser todas o por mes*/
    //res.send('Get operaciones por cuenta habiente [por mes]');
    res.render('cuentahabiente',{
      hola:"mundo",
      arreglo: [
        'a','b','c'
      ]
    })
}

module.exports = {
  getOperacionesCthabiente
}