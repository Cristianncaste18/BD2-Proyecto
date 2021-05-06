const { getTransactions, getTransactionsByMonth } = require("../db/cuentahabiente")

async function indexCthabiente(req, res){
  res.render('cuentahabiente',{
      ctahabiente:{
        name: '',
        lastname: '',
        cui: ''
      },
      transacciones:[]
    })
}

async function getOperacionesCthabiente(req, res){
    console.log(`REQUEST:: ${JSON.stringify(req.body,null,2)}`)
    let transacciones = [];
    if(req.body.mes == ''){
      const r = await getTransactions(req.body.cui);
      transacciones = r.rows;
    } else {
      const month_year = req.body.mes.split('/')
      const formattedDate = month_year[1] + '-' + month_year[0] + '-'
      const r = await getTransactionsByMonth(req.body.cui,formattedDate + '01', formattedDate + getLastDay(month_year[0]));
      transacciones = r.rows;
    }
    let ctahabiente = {
      name: transacciones[0].name_cta,
      lastname: transacciones[0].lastname_cta,
      cui:req.body.cui
    }
    res.render('cuentahabiente',{ctahabiente,transacciones})
}

function getLastDay(month){
  switch(parseInt(month)){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 28;
  }
}

module.exports = {
  indexCthabiente,
  getOperacionesCthabiente
}