import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const routes = Router();

routes.post('/', UsersController.create);
routes.get('/', UsersController.getUserInfo);

export default routes;
