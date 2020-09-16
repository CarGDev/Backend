'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupContactModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('contact', {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
