'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGenresModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('genres', {
    Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Genre: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
