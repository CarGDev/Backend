'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGamesCollectionModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('gamesCollection', {
    Notes: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  })
}
