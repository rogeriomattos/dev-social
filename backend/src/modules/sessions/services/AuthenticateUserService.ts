import knex from '../../../shared/infra/database/connection';

interface Request {
    email: string;
    password: string;
}

class AuthenticateUserService {
    public async execute({email, password}: Request): Promise<any> {
        return new Promise(async(resolve, reject)=>{
            try {
                const user = await knex('users').where('email', email).first();
                
                if(!user) {
                    throw new Error('Incorrect email/password.');
                }
                
                const passwordMatched = user.password == password;

                if(!passwordMatched){
                    throw new Error('Incorrect email/password.');
                }

                resolve( {
                    user,
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default AuthenticateUserService;