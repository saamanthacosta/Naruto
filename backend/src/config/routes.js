const { Router } = require('express');
const NinjaController = require('../controllers/NinjaController');
const SearchController = require('../controllers/SearchController');

const routes = Router();

routes.get('/ninjas', NinjaController.index);
routes.get('/ninjas/:id', NinjaController.show);
routes.post('/ninjas', NinjaController.store);
routes.put('/ninjas', NinjaController.update);
routes.delete('/ninjas/:id', NinjaController.destroy);

routes.get('/buscaPorFraquezas', SearchController.fraquezas);
routes.get('/buscaPorPoderes', SearchController.poderes);
routes.get('/buscaPorGrupos', SearchController.grupos);
routes.get('/buscarPorEditora', SearchController.editora);

module.exports = routes;