import express from 'express';
import usersRouter from './users.routes';
import sesionsRouter from './sessions.routes';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message: ''});
});

routes.use('/users', usersRouter);
routes.use('/sessions', sesionsRouter);

export default routes;