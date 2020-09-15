'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupLenguagesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('lenguages', {
    Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Lenguages: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
