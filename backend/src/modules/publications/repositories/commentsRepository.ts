import { IRepository } from "@shared/utils/IRepository";
import knex from '../../../shared/infra/database/connection';

import Comment from '../entites/comment';

const commentTable = 'comments';

class CommentsRepository {
    create({user_id, publication_id, created_date, comment}:Omit<Comment, 'id'>): Promise<Comment>{
        return new Promise(async(resolve, reject)=>{
            try {
                const id =await knex(commentTable).insert({
                    user_id,
                    publication_id, 
                    created_date,
                    comment
                });

                const commentSaved = await this.find(id[0]);

                resolve(commentSaved);
            } catch (error) {
                reject(error);
            }
        })
    }

    find(id: number):Promise<Comment> {
        return new Promise(async(resolve, reject)=>{
            try{   
                const comment = await  knex(commentTable).where('id', id).first();
                if(!comment)
                    throw Error('Comment not found.' ); 
                resolve(new Comment(comment));
            }catch(error) {
                reject(error);
            }
        });
    }
}

export default CommentsRepository;