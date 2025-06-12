const dotenv = require("dotenv");
dotenv.config();

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const user = process.env.USER;
const pass = process.env.PASSWORD;
const db = process.env.DATABASE;

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: user,
      password: pass,
      database: db,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: user,
      password: pass,
      database: db,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: user,
      password: pass,
      database: db,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
