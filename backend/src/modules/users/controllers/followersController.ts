import { Request, Response } from 'express';
import FollowersRepository from '../repositories/followersRepository';
import CreateFollower from '../services/createFollower';
import DeleteFollower from '../services/deleteFollower';

const followersRepository = new FollowersRepository();

class FollowersController {
    async create(request: Request, response: Response) {
        try {
            const userId = parseInt(request.params.id);
            const followerUserId = request.user.id;
            
            const followCreated = await new  CreateFollower(followersRepository)
                                    .execute(userId, followerUserId);
            
            return response.status(201).json(true);

        } catch (error) {
            return response.status(500).json({message: error.message});
        }
    }

    async delete(request: Request, response: Response) { 
        try {
            const userId = parseInt(request.params.id);
            const followerUserId = request.user.id;

            const isDeleted = await new DeleteFollower(followersRepository)
                                        .execute(userId, followerUserId);
            return response.status(202).json(true);
        } catch (error) {
            return response.status(500).json({message: error.message});
        }
    }
}

export default FollowersController;