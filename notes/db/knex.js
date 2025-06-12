const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development); // use dev config from knexfile.js
module.exports = db;
