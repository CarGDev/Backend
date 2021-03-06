'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupUsersModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('users', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Nickname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Country: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Postal_Code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Birthday: {
      type: Sequelize.DATE,
      allowNull: false
    },
    Status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }

  })
}
