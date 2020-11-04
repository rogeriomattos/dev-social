import Publication from "../entites/publication";
import PublicationsRepository from "../repositories/publicationsRepository";

interface Request {
    user_id: number;
    description: string;
}

class CreatePublication {
    
    private publicationRepository: PublicationsRepository;

    constructor(publicationRepository: PublicationsRepository){
        this.publicationRepository = publicationRepository;
    }
    
    execute({ user_id, description }: Request): Promise<Publication> {
        return new Promise(async(resolve, rejct)=>{
            try {
                
                if(!description){
                    throw new Error("Description can't undefined/null");
                }

                const publication = await this.publicationRepository.create({
                    created_date: new Date().toUTCString(),
                    description,
                    user_id
                });

                resolve(publication);
            } catch (error) {
                rejct(error);
            }
        });
    }
}

export default CreatePublication;