const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginainicial);
route.post('/', homeController.trataPost);

// Rotas de Contato
route.get('/contato', contatoController.paginainicial);

module.exports = route;

