import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/auth';

import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
    async auth(request: Request, response: Response) {
        try {
            const { email, password } = request.body;
    
            const authenticateUserService = new AuthenticateUserService();
    
            const { user } = await authenticateUserService.execute({
                email,
                password
            });
            const { secret, expiresIn } = authConfig.jwt;
            const token = sign({}, secret, {
                subject: user.id.toString(),
                expiresIn,
            });

            response.status(200).json({ 
                user, 
                token 
            });
        } catch (error) {
            response.status(500).json({msg:error});
        }

    }
}

export default SessionsController;