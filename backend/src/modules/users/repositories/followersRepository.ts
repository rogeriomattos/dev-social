import knex from '../../../shared/infra/database/connection';

const followersTable = 'followers';

class FollowersRepository {
    create (userId: number, followerUserId: number): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            try {
                const followResult = await knex(followersTable)
                                    .insert({
                                        follower_user_id: followerUserId,
                                        followed_user_id: userId
                                    });
                
                resolve(true);
            } catch (error) {
                reject(error);    
            }
        });
    }

    delete (userId: number, followerUserId: number): Promise<boolean> {
        return new Promise(async(resolve, reject) => {
            try {
                const followResult = await knex(followersTable)
                                    .where('follower_user_id', followerUserId)
                                    .andWhere('followed_user_id', userId)
                                    .delete();
                                    
                resolve(true);
            } catch (error) {
                reject(error);    
            }
        });
    }

    find (userId: number, followerUserId: number): Promise<any> {
        return new Promise(async(resolve, reject) => {
            try {
                const followResult = await knex(followersTable)
                                    .where('follower_user_id', followerUserId)
                                    .andWhere('followed_user_id', userId)
                                    .first();
                                    
                resolve(followResult);
            } catch (error) {
                reject(error);    
            }
        });
    }

    listTheUsersFollowers() {

    }

    listWhoTheUserFollows() {

    }
}

export default FollowersRepository;