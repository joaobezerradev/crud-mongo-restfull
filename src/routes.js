import { Router } from 'express';
import crudController from './Controller/crudController';

const routes = new Router();

routes.get('/', crudController.index);
routes.get('/:id', crudController.show);
routes.post('/', crudController.store);
routes.put('/:id', crudController.update);
routes.delete('/:id', crudController.destroy);

export default routes;
