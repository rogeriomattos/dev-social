import express from 'express';
import usersRouter from './users.routes';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message: ''});
});

routes.use('/users', usersRouter);

export default routes;