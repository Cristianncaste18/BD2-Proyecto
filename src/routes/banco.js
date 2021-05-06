const router = require('express').Router();
const { indexBanco, getOperacionesBanco, getTotalesBanco } = require('../controllers/banco');

router.get('',indexBanco)
router.get('/operaciones',getOperacionesBanco);
router.get('/total',getTotalesBanco);

module.exports = router;
