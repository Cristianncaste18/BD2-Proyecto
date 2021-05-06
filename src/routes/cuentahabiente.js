const router = require('express').Router();
const { getOperacionesCthabiente, indexCthabiente } = require('../controllers/cuentahabiente');

router.get('',indexCthabiente);
router.post('',getOperacionesCthabiente);

module.exports =  router;