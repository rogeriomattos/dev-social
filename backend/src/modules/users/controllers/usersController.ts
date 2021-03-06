import { Request, Response } from 'express';
import { CreateUser } from '../services';
import UsersRespository from '../repositories/usersRepository';
import UpdateUser from '../services/updateUser';

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
            return response.status(500).json({message:error.message});
        }
    }

    async update(request: Request, response: Response) {
        try {
            const {
                name,
                email, 
                bio
            } = request.body;

            const userId = request.user.id;
            
            const user = await new  UpdateUser(usersRespository)
                                    .execute({
                                        id: userId,
                                        email,
                                        name,
                                        bio
                                    });
            
            return response.status(201).json(user);
        } catch (error) {
            return response.status(500).json({message: error.message});
        }   
    }

    async show(request: Request, response: Response) {
        try {
            const id:number  = parseInt(request.params.id);

            const user = await usersRespository.find(id);

            delete user.password;
            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({message:error.message});
        }
    }
}

export default UsersController;