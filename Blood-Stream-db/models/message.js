'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGenresModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('genres', {
    Message_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    User_Id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Message: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    Post_Like: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    Date_Created: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })
}
