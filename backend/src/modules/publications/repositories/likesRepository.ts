import { IRepository } from "@shared/utils/IRepository";
import knex from '../../../shared/infra/database/connection';

import Like from '../entites/like';

const likesTable = 'likes';

class LikesRepository {
    create({user_id, publication_id, created_date}: Like): Promise<Like>{
        return new Promise(async(resolve, reject)=>{
            try {
                await knex(likesTable).insert({
                    user_id,
                    publication_id, 
                    created_date
                });

                const like = await this.find({user_id, publication_id});

                resolve(like);
            } catch (error) {
                reject(error);
            }
        })
    }

    find({publication_id, user_id}: Omit<Like, 'created_date'>):Promise<Like> {
        return new Promise(async(resolve, reject)=>{
            try{   
                const like = await  knex(likesTable).where('user_id', user_id)
                                    .andWhere('publication_id', publication_id).first();
                if(!like)
                    throw Error('Like not found.' ); 
                resolve(new Like(like));
            }catch(error) {
                reject(error);
            }
        });
    }
}

export default LikesRepository;