import { Router } from 'express';
import UsersController from '../../../../modules/users/controllers/usersController';
import ensureAuthenticated from '../../../../middlewares/ensureAuthenticated';
import FollowersController from '../../../../modules/users/controllers/followersController';

const followersController = new FollowersController();


const routes = Router();

const userController = new UsersController();

routes.post('/', userController.create);
routes.get('/:id', userController.show);

routes.use(ensureAuthenticated).put('/:id', userController.update);
routes.use('/:id/followers', ensureAuthenticated);
routes.post('/:id/followers', followersController.create);
routes.delete('/:id/followers', followersController.delete);

export default routes;