import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('followers', table => {
        //usuário que segue
        table.integer('follower_user_id')
        .notNullable()
        .references('id')
        .inTable('users');
        
        //usuário que é seguido
        table.integer('followed_user_id')
        .notNullable()
        .references('id')
        .inTable('users');
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('followers');
}