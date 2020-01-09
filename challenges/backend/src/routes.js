import { Router } from 'express';

import UserController from './app/controllers/UserController';
import FormapagamentoController from './app/controllers/FormapagamentoController';
import PagamentoController from './app/controllers/PagamentoController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserController.index);

routes.post('/formapagamento', FormapagamentoController.store);
routes.get('/formapagamento', FormapagamentoController.index);

routes.post('/pagamentos', PagamentoController.store);
routes.get('/pagamentos', PagamentoController.index);

export default routes;
