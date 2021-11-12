const knex = require("knex")

const config = require("./../knexfile")
const { NODE_ENV } = require("./../config")

module.exports = knex(config[NODE_ENV])
