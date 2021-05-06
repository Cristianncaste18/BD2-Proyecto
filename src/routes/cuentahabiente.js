const router = require('express').Router();
const { getOperacionesCthabiente, indexCthabiente, addTransaction } = require('../controllers/cuentahabiente');

router.get('',indexCthabiente);
router.post('',getOperacionesCthabiente);
router.post('/add',addTransaction);

module.exports =  router;