import { Request, Response } from 'express';
import { CreateUser } from '../services';
import usersRespository from '../repositories/usersRepository';

class UsersController {
    async create(request: Request, response: Response) {
        try {
            const {
                name,
                email, 
                password,
            } = request.body;
            
            const user = await new  CreateUser(new usersRespository())
                                    .execute({
                                        name,
                                        email,
                                        password,
                                    });
            delete user.password;
            return response.status(201).json(user);
        } catch (error) {
            console.log(error);
            return response.status(500).json({message:error});
        }
    }
}

export default UsersController;