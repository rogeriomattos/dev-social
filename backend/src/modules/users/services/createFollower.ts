import FollowersRepository from "../repositories/followersRepository";

class CreateFollower {
    private followersRepository: FollowersRepository;

    constructor(followersRepository: FollowersRepository) {
        this.followersRepository = followersRepository;
    }

    execute(userId: number, followerUserId: number): Promise<boolean>{
        return new Promise(async(resolve, reject) => {
            try {
                if(userId == followerUserId)
                    throw new Error("The user cannot follow himself");
                
                const followExists = await this.followersRepository.find(userId, followerUserId);
                if(followExists)
                    throw new Error("The user is already following that user");
                
                const followerCreated =  await this.followersRepository.create(userId, followerUserId);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default CreateFollower;