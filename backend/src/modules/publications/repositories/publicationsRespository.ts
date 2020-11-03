import { IRepository } from "@shared/utils/IRepository";
import knex from '../../../shared/infra/database/connection';
import Publication from "../entites/publication";

const publicationsTable = 'publications'

class PublicationsRespository implements IRepository<Publication> {
    create({ description, user_id, created_date }: Omit<Publication, 'id'>): Promise<Publication>{
        return new Promise(async(resolve, reject) => {
            const publicationId =  await knex(publicationsTable).insert({
                description, 
                created_date,
                user_id
            });

            const publication = await this.find(publicationId[0]);

            resolve(publication);
        });
    }

    update(): Promise<Publication>{
        return new Promise((resolve, reject) => {

        });
    }

    delete(): Promise<boolean>{
        return new Promise((resolve, reject) => {

        });
    }

    find(id: number): Promise<Publication>{
        return new Promise(async(resolve, reject) => {
            try{   
                const publication = await knex(publicationsTable).where('id', id).first();
                if(!publication)
                    throw Error('User not found.' ); 
                resolve(new Publication(publication));
            }catch(error) {
                reject(error);
            }
        });
    }

    listAll(): Promise<Publication[]>{
        return new Promise(async(resolve, reject) => {
            try {
                const publications = await knex(publicationsTable).select('*');

                resolve(
                    publications.map((item)=> (new Publication(item) ))
                );
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default PublicationsRespository;