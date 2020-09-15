'use strict'

const setupDatabase = require('./lib/db')

const setupMessageModel = require('./models/message')
const setupPasswordModel = require('./models/password')
const setupUsersModel = require('./models/users')
const setupGamesCollectionModel = require('./models/gamesCollection')
const setupContactModel = require('./models/contact')
const setupAccessRolModel = require('./models/accessRol')
const setupPlatformModel = require('./models/platform')
const setupPlatformGamesModel = require('./models/platformGames')
const setupLanguagesModel = require('./models/lenguages')
const setupLanguagesGamesModel = require('./models/lenguagesGames')
const setupGenresModel = require('./models/genres')
const setupGenresGamesModel = require('./models/genresGames')
const setupGamesModel = require('./models/games')
const setupUserRatingModel = require('./models/userRating')
const setupGamesRatingModel = require('./models/gamesRating')
const setupGameRatingModel = require('./models/gameTating')

const defaults = require('defaults')

const setupMessage = require('./lib/message')
const setupPassword = require('./lib/password')
const setupUsers = require('./lib/users')
const setupGamesCollection = require('./lib/gamesCollection')
const setupContact = require('./lib/contact')
const setupAccessRol = require('./lib/accessRol')
const setupPlatform = require('./lib/platform')
const setupPlatformGames = require('./lib/platformGames')
const setupLenguages = require('./lib/lenguages')
const setupLenguagesGames = require('./lib/lenguagesGames')
const setupGenres = require('./lib/genres')
const setupGenresGames = require('./lib/genresGames')
const setupGames = require('./lib/games')
const setupUserRating = require('./lib/userRating')
const setupGamesRating = require('./lib/gamesRating')
const setupGameRating = require('./lib/gameRating')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pools: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const MessagesModel = setupMessageModel(config)
  const PasswordModel = setupPasswordModel(config)
  const UsersModel = setupUsersModel(config)
  const GamesCollectionModel = setupGamesCollectionModel(config)
  const ContactModel = setupContactModel(config)
  const AccessRolModel = setupAccessRolModel(config)
  const PlatformsModel = setupPlatformModel(config)
  const PlatformGamesModel = setupPlatformGamesModel(config)
  const LenguagesModel = setupLanguagesModel(config)
  const LanguagesGamesModel = setupLanguagesGamesModel(config)
  const GenresModel = setupGenresModel(config)
  const GenresGamesModel = setupGenresGamesModel(config)
  const GamesModel = setupGamesModel(config)
  const UserRatingModel = setupUserRatingModel(config)
  const GamesRatingModel = setupGamesRatingModel(config)
  const GameRatingModel = setupGameRatingModel(config)

  UsersModel.hasMany(MessagesModel)
  UsersModel.hasMany(GamesCollectionModel)
  UsersModel.hasMany(ContactModel)
  UsersModel.hasMany(PlatformsModel)

  UsersModel.hasOne(PasswordModel)
  UsersModel.hasOne(UserRatingModel)
  UsersModel.hasOne(AccessRolModel)

  GamesModel.hasMany(GamesCollectionModel)
  GamesModel.hasOne(PlatformGamesModel)
  GamesModel.hasMany(LenguagesModel)
  GamesModel.hasMany(GenresGamesModel)
  GamesModel.hasMany(GameRatingModel)

  GenresGamesModel.belongsTo(GenresModel)
  GenresGamesModel.belongsTo(GamesModel)

  GamesRatingModel.belongsTo(UserRatingModel)
  GamesRatingModel.belongsTo(GameRatingModel)

  LanguagesGamesModel.belongsTo(LenguagesModel)
  LanguagesGamesModel.belongsTo(GamesModel)

  await sequelize.authenticate()

  sequelize.sync()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const message = setupMessage()
  const password = setupPassword()
  const users = setupUsers()
  const gamesCollection = setupGamesCollection()
  const contact = setupContact()
  const accessRol = setupAccessRol()
  const platform = setupPlatform()
  const platformGames = setupPlatformGames()
  const lenguages = setupLenguages()
  const lenguagesGames = setupLenguagesGames()
  const genres = setupGenres()
  const genresGames = setupGenresGames()
  const games = setupGames()
  const userRating = setupUserRating()
  const gamesRating = setupGamesRating()
  const gameRating = setupGameRating()

  return {
    message,
    password,
    users,
    gamesCollection,
    contact,
    accessRol,
    platform,
    platformGames,
    lenguages,
    lenguagesGames,
    genres,
    genresGames,
    games,
    userRating,
    gamesRating,
    gameRating
  }
}
