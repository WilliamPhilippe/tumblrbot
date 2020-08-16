import { Router } from 'express';

import PostsController from '../controller/PostsController';

const routes = Router();

routes.get('/likes', PostsController.getLikedPosts);

export default routes;
