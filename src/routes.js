const express = require('express');
const routes = express.Router();
const UsuarioController = require('./controllers/usuarioController');
const ChamadaController = require('./controllers/chamadaController');

routes.get('/login', UsuarioController.index);
routes.post('/cadastrar', UsuarioController.cadastrar);

routes.post('/chamada', ChamadaController.criarChamada);
routes.put('/chamada', ChamadaController.encerrarChamada);


module.exports = routes;