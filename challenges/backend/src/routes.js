import { Router } from 'express';

import ClientController from './app/controllers/ClientControllers';
import PaymethodController from './app/controllers/PaymethodControllers';

const routes = new Router();

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);

routes.post('/paymethod', PaymethodController.store);
routes.get('/paymethod', PaymethodController.index);
routes.get('/paymethod/:name_client', PaymethodController.details);

export default routes;
