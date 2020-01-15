import { Router } from 'express';

import ClientController from './app/controllers/ClientController';
import PaymentServicesController from './app/controllers/PaymentServicesController';
import TransactionsController from './app/controllers/TransactionsController';

const routes = new Router();

routes.post('/client', ClientController.create);
routes.get('/clients', ClientController.index);

routes.get('/payment_services', PaymentServicesController.index);
routes.post('/payment_services', PaymentServicesController.create);

routes.get('/transactions', TransactionsController.index);
routes.post('/transactions', TransactionsController.create);

export default routes;
