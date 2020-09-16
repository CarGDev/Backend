'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGamesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('games', {
    Url_Game: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Subtitle: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    Icon_Url: {
      type: Sequelize.STRING,
      allowNull: true
    },
    Average_User_Rating: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    User_Rating_Count: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    Developer: {
      type: Sequelize.STRING,
      allowNull: true
    },
    Age_Rating: {
      type: Sequelize.STRING,
      allowNull: true
    },
    Size: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    Primary_Genre: {
      type: Sequelize.STRING,
      allowNull: true
    },
    Original_Release_Date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    Current_Version_Release_DAte: {
      type: Sequelize.DATE,
      allowNull: true
    },
    Platform_Id: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
}
