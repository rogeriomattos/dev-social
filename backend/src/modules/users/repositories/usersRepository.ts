import { IRepository } from "@shared/utils/IRepository";
import User from "../entites/user";
import knex from '../../../shared/infra/database/connection';

const usersTableName = 'users';

class UsersRepository implements IRepository<User> {
    create({ name, email, password }: Omit<User, 'id'|'bio'|'profilePhoto'>): Promise<User> {
        return new Promise(async(resolve, reject)=>{

            try {
                const userId = await knex(usersTableName).insert({
                    name,
                    email,
                    password
                });
    
                const user = await this.find(userId[0]);
    
                resolve(user);
            } catch (error) {
                reject(error);
            }
        });
    }

    update({id, name, email, password, bio, profilePhoto }: Omit<User, ''>): Promise<User> {
        return new Promise(async(resolve, reject)=>{
            try {
                const userId = await  knex(usersTableName)
                                    .where('id', id)
                                    .update({
                                        name, 
                                        email, 
                                        password, 
                                        bio, 
                                        profilePhoto
                                    });
                
                const user = await this.find(userId);

                resolve(user);
            } catch (error) {
                reject(error);
            }
        });
    }

    delete(id: number): Promise<boolean> {
        return new Promise((resolve, reject) => {

        });
    }    

    find(id: number): Promise<User> {
        return new Promise(async (resolve, reject) => {
            try{   
                const user = await knex('users').where('id', id).first();
                if(!user)
                    throw Error('User not found.' ); 
                resolve(new User(user));
            }catch(error) {
                reject(error);
            }
        });
    }

    findByEmail(email: string): Promise<User|undefined> {
        return new Promise(async (resolve, reject) => {
            try{   
                const user = await knex(usersTableName).where('email', email).first();
                if(!user)
                    resolve(undefined);
                resolve(new User(user));
            }catch(error) {
                reject(error);
            }
        });
    }

    listAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {

        });
    }
}

export default UsersRepository;