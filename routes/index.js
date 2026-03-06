var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Criar conta'});
  
});

const userController = require('..modules/user/userController');
// requisição POST para processar o form de cadastro
router.post('/register', userController.register);

module.exports = router;
