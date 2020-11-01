import { Request, Response } from 'express';
import { CreateUser } from '../services';
import UsersRespository from '../repositories/usersRepository';

const usersRespository = new UsersRespository();

class UsersController {
    async create(request: Request, response: Response) {
        try {
            const {
                name,
                email, 
                password,
            } = request.body;
            
            const user = await new  CreateUser(usersRespository)
                                    .execute({
                                        name,
                                        email,
                                        password,
                                    });
            delete user.password;
            return response.status(201).json(user);

        } catch (error) {
            return response.status(500).json({message:error});
        }
    }

    async show(request: Request, response: Response) {
        try {
            const id:number  = parseInt(request.params.id);

            const user = await usersRespository.find(id);

            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({message:error});
        }
    }
}

export default UsersController;