const router = require('express').Router();
const { getOperacionesCthabiente } = require('../controllers/cuentahabiente');

router.get('',getOperacionesCthabiente);

module.exports =  router;