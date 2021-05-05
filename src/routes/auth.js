const router = require('express').Router();
const { login, register } = require('../controllers/auth');

// Renders the index page of the application
router.get('',(req, res) => {res.render('index')})
router.get('/login',login);
router.get('/register',register);

module.exports = router;