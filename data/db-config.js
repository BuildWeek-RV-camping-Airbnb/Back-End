const knexConfig = require('../knexfile');
const knex = require('knex');
const environment = process.env.DB_ENV || "development"
//const db = knex(knexConfig.development);

module.exports = knex(knexConfig[environment])