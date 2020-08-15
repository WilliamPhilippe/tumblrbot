import { Router } from 'express';

import postsRouter from '@modules/posts/infra/http/routes/posts.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/posts', postsRouter);
routes.use('/users', usersRouter);

export default routes;
