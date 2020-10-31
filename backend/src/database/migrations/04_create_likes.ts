import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('likes', table => {
        
        table.string('created_date').notNullable();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');

        table.integer('publication_id')
        .notNullable()
        .references('id')
        .inTable('publications');
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('likes');
}