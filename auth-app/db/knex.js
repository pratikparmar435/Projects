const kenx = require("knex");
const config = require("../knexfile");

const db = kenx(config.development);
module.exports = db;
