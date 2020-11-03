import { Router } from 'express';
import PublicationController from  '../../../../modules/publications/controllers/publicationController';
import ensureAuthenticated from '../../../../middlewares/ensureAuthenticated';

const routes = Router();

routes.use(ensureAuthenticated);

const publicationController = new PublicationController();

routes.post('/', publicationController.create);

export default routes;