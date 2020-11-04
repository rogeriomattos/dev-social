import LikesRepository from "../repositories/likesRepository";

interface Request {
    user_id: number;
    publication_id: number;
}

class CreateLike {
    private likesRepository: LikesRepository;

    constructor(likesRepository: LikesRepository){
        this.likesRepository = likesRepository;
    }

    execute({ publication_id, user_id }: Request) {
        return new Promise(async(resolve, reject)=>{
            try {
                const created_date = new Date().toUTCString();

                const like = await this.likesRepository.create({
                    publication_id,
                    user_id,
                    created_date
                });

                resolve(like);
            }catch(error){
                reject(error);
            }
        });
    }

}

export default CreateLike;