import { Request, Response } from 'express';

import CreateComment from '../services/createComment';
import CommentsRepository from '../repositories/commentsRepository';


const createComment = new CreateComment(new CommentsRepository());

class CommentsController {
    async create(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const { comment } = request.body;

            const publication_id = parseInt(id);
            const user_id = request.user.id;

            const commentSaved = await createComment.execute({
                publication_id, 
                user_id,
                comment
            });

            response.status(201).json(commentSaved);
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default CommentsController;