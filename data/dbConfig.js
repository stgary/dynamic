const knex = require("knex");
const knexfile = require("../knexfile.js");
const ENVIRONMENT = require('./config.js')

const environment = ENVIRONMENT || "development";

module.exports = knex(knexfile[environment]);