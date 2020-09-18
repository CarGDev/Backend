'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupLenguagesGamesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('lenguagesGames', {
  })
}
