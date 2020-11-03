import { Request, Response } from 'express';
import { CreatePublication } from '../services';
import PublicationsRespository from '../repositories/publicationsRespository';

const publicationsRespository = new PublicationsRespository();
const createPublication = new CreatePublication(publicationsRespository);

class PublicationController {
    async create(request: Request, response: Response) {
        try {
            const { description, user_id } = request.body;

            const publication = await createPublication.execute({
                user_id: user_id,
                description
            });

            response.status(201).json(publication);
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default PublicationController;