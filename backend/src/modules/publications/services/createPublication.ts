import Publication from "../entites/publication";
import PublicationsRespository from "../repositories/publicationsRespository";

interface Request {
    user_id: number;
    description: string;
}

class CreatePublication {
    
    private publicationRepository: PublicationsRespository;

    constructor(publicationRepository: PublicationsRespository){
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