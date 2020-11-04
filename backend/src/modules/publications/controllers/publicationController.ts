import { Request, Response } from 'express';
import { CreatePublication } from '../services';
import PublicationsRepository from '../repositories/publicationsRepository';

const publicationsRepository = new PublicationsRepository();
const createPublication = new CreatePublication(publicationsRepository);

class PublicationController {
    async create(request: Request, response: Response) {
        try {
            const { description } = request.body;

            const publication = await createPublication.execute({
                user_id: request.user.id,
                description
            });

            response.status(201).json(publication);
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default PublicationController;