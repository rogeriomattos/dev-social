import { Router } from 'express';
import ensureAuthenticated from '../../../../middlewares/ensureAuthenticated';
import PublicationController from  '../../../../modules/publications/controllers/publicationController';
import LikesController from  '../../../../modules/publications/controllers/likesController';

const routes = Router();

routes.use(ensureAuthenticated);

const publicationController = new PublicationController();
const likesController = new LikesController();

routes.post('/', publicationController.create);
routes.post('/:id/likes', likesController.create);

export default routes;