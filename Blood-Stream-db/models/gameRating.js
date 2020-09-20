'use strict'

// const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGameRatingModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('gameRating', {
  })
}
