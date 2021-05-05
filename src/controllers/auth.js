async function login(req, res){
  res.send('Login');
}

async function register(req, res){
  res.send('Register');
}

module.exports = {
  login,
  register
}