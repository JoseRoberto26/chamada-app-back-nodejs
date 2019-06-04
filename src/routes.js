const express = require('express');
const routes = express.Router();
const UsuarioController = require('./controllers/usuarioController');

routes.get('/login',UsuarioController.index());

module.exports = routes;