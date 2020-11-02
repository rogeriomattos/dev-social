import { Router } from 'express';
import SessionsController from '../../../../modules/sessions/controllers/sessionsController';

const routes = Router();
const sessionsController = new SessionsController();

routes.post('/auth', sessionsController.auth);

export default routes; 