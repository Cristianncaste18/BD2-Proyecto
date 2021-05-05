const router = require('express').Router();
const auth = require('./auth');
const cuentahabiente = require('./cuentahabiente')
const banco =  require('./banco')

router.use('', auth)
router.use('/cuentahabiente', cuentahabiente)
router.use('/banco', banco)

module.exports = router