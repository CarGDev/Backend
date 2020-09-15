'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPlatformModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('platform', {
    Platform_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Platform: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
