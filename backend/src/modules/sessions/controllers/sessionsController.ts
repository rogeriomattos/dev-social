import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

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

            const token = sign({}, '11fa45ec60a3ef3421c3ce6f86b564e6', {
                subject: user.id.toString(),
                expiresIn: '1d',
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