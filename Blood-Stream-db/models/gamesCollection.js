'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGamesCollectionModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('gamesCollection', {
    Collection_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Game_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    User_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Notes: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  })
}
