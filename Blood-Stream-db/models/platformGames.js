'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPlatformGamesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('platformGames', {
    Games_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Platform_Id: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
