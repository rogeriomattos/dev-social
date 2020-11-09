import User from "../entites/user";
import UsersRepository from "../repositories/usersRepository";

class UpdateUser {
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }

    execute({ email, name, bio, id }: Omit<User, 'password'|'profilePhoto'>) : Promise<User> {
        return  new Promise(async(resolve, reject) => {
            try {
                if(!email)
                    throw Error("Email is required");
                if(!name)
                    throw Error("Name is required");
                
                const user = await this.usersRepository.find(id);
                if(!user)
                    throw Error("User not found");

                const userUpdated = await   this.usersRepository
                                            .update({
                                                id, 
                                                email,
                                                name,
                                                password: user.password,
                                                bio
                                            });
                resolve(userUpdated);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default UpdateUser;