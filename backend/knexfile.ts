import Knex from 'knex';
import path from 'path';

export const development: Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'shared', 'infra', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'shared', 'infra', 'database', 'migrations')
    },
    useNullAsDefault: true,
};