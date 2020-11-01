import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('followers', table => {
        
        table.integer('follower_user_id')
        .notNullable()
        .references('id')
        .inTable('users');
        
        table.integer('followed_user_id')
        .notNullable()
        .references('id')
        .inTable('users');
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('followers');
}