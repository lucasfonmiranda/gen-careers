import { Router } from 'express';
import ClientController from './app/controllers/ClientController';
import TransactionController from './app/controllers/TransactionController';

const routes = new Router();

routes.get('/clients', ClientController.index);
routes.post('/newclient', ClientController.store);

routes.get('/transactions', TransactionController.index);
routes.post('/newtransactions', TransactionController.store);

export default routes;
