import { Router } from 'express';
import ensureAuthenticated from '../../../../middlewares/ensureAuthenticated';
import PublicationController from  '../../../../modules/publications/controllers/publicationController';
import LikesController from  '../../../../modules/publications/controllers/likesController';
import CommentsController from  '../../../../modules/publications/controllers/commentsController';

const routes = Router();

routes.use(ensureAuthenticated);

const publicationController = new PublicationController();
const likesController = new LikesController();
const commentsController = new CommentsController();

routes.post('/', publicationController.create);
routes.post('/:id/likes', likesController.create);
routes.post('/:id/comments', commentsController.create);

export default routes;