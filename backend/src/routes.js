import { Router } from 'express';
import ClientController from './app/controllers/ClientController';

const routes = new Router();

routes.get('/clients', ClientController.index);
routes.post('/newclient', ClientController.store);

export default routes;
