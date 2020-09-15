'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPasswordModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('password', {
    Pass_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    User_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    JWT_Password: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
