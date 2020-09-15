'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAccessRolModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('accessRol', {
    Access_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    User_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Rol: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Level: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
}
