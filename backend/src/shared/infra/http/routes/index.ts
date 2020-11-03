import express from 'express';
import usersRouter from './users.routes';
import sesionsRouter from './sessions.routes';
import publicationsRouter from './publications.routes';

const routes = express.Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sesionsRouter);
routes.use('/publications', publicationsRouter);

export default routes;