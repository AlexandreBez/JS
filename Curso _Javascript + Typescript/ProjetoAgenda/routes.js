
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const LoginController = require('./src/controllers/LoginController');
const contatoController = require('./src/controllers/LoginController');

// Rotas da home
route.get('/', homeController.index);

// Rotas de Login
route.get('/login/index', LoginController.index);
route.post('/login/register', LoginController.register);
route.post('/login/login', LoginController.login);
route.post('/login/login', LoginController.login);
route.get('/login/logout', LoginController.logout);

//Rotas de Contato
route.get('/contato/index', contatoController.index);


module.exports = route;