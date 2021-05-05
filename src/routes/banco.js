const router = require('express').Router();
const { getOperacionesBanco, getTotalesBanco } = require('../controllers/banco');

router.get('',getOperacionesBanco);
router.get('/total',getTotalesBanco);

module.exports = router;
