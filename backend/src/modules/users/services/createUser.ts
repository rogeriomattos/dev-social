import User from "../entites/user";
import UsersRepository from "../repositories/usersRepository";

class CreateUser {
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }

    execute({ email, password, name }: Omit<User, 'id'|'bio'|'profilePhoto'>) : Promise<User> {
        return new Promise(async(resolve, reject) => {
            try {

                if(!email)
                    throw Error("Email is required");
                if(!password)
                    throw Error("Password is required");
                if(!name)
                    throw Error("Name is required");
                
                const userExist = await this.usersRepository.findByEmail(email);
                
                if(userExist)
                    throw Error("A user with this email already exists");
                
                const user = await this.usersRepository.create({email, password, name});
                
                resolve(user);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default CreateUser;