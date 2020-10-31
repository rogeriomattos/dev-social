import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('publications', table => {
        table.increments('id').primary();
        table.string('created_date').notNullable();
        table.string('description');

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('publications');
}