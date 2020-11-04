import CommentsRepository from "../repositories/commentsRepository";

interface Request {
    user_id: number;
    publication_id: number;
    comment: string;
}

class CreateComment {
    private commentsRepository: CommentsRepository;

    constructor(commentsRepository: CommentsRepository){
        this.commentsRepository = commentsRepository;
    }

    execute({ publication_id, user_id, comment }: Request) {
        return new Promise(async(resolve, reject)=>{
            try {
                const created_date = new Date().toUTCString();

                const commentSaved = await this.commentsRepository.create({
                    publication_id,
                    user_id,
                    created_date,
                    comment
                });

                resolve(commentSaved);
            }catch(error){
                reject(error);
            }
        });
    }

}

export default CreateComment;