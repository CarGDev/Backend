'use strict'

// const pg = require('pg');
// pg.defaults.ssl = true;
const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
    console.log(sequelize)
  }
  return sequelize
}
