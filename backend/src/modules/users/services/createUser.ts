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
                    throw Error("Email é obrigatório");
                if(!password)
                    throw Error("Senha é obrigatória");
                if(!name)
                    throw Error("Nome é obrigatório");

                const user = await this.usersRepository.create({email, password, name});
                
                resolve(user);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default CreateUser;