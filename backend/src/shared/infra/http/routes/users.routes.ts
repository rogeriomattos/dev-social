import { Router } from 'express';
import UsersController from '../../../../modules/users/controllers/usersController';

const routes = Router();

const userController = new UsersController();

routes.post('/', userController.create);

export default routes;