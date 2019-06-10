const express = require('express');
const routes = express.Router();
const UsuarioController = require('./controllers/usuarioController');
const ChamadaController = require('./controllers/chamadaController');
const PresencaController = require('./controllers/presencaController');

routes.get('/usuario/allusers', UsuarioController.obterUsuarios);
routes.get('/usuario/login', UsuarioController.logar);
routes.post('/usuario/cadastrar', UsuarioController.cadastrar);

routes.post('/chamada/criar', ChamadaController.criarChamada);
routes.put('/chamada/encerrar', ChamadaController.encerrarChamada);
routes.get('/chamada/allChamadas', ChamadaController.obterChamadas);

routes.get('/presenca/allPresencas', PresencaController.obterPresencasDaChamada);
routes.post('/presenca/criar', PresencaController.criarPresenca);
routes.put('/presenca/alterar', PresencaController.alterarPresenca);


module.exports = routes;