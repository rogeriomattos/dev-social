import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('publication_images', table => {
        table.increments('id').primary();
        table.string('image').notNullable();

        table.integer('publication_id')
        .notNullable()
        .references('id')
        .inTable('publications');
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('publication_images');
}