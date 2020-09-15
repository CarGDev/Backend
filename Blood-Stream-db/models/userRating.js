'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupUserRatingModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('userRating', {
    User_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Game_Rating_Id: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
