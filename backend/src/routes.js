import { Router } from 'express';

import ClientController from './app/controllers/ClientController';
import TransactionController from './app/controllers/TransactionController';

const routes = new Router();

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);

routes.get('/transactions', TransactionController.show);
routes.get('/transactions', TransactionController.index);
routes.post('/transactions', TransactionController.store);

export default routes;
