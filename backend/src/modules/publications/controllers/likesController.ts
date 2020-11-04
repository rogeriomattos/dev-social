import { Request, Response } from 'express';
import CreateLike from '../services/createLike';
import LikesRepository from '../repositories/likesRepository';


const createLike = new CreateLike(new LikesRepository());

class LikesController {
    async create(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const publication_id = parseInt(id);
            const user_id = request.user.id;

            const like = await createLike.execute({publication_id, user_id });
            console.log(like);
            response.status(201).json({ok: true});
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default LikesController;