'use strict'

const db = require('../index')
const config = require('configuration')
const utils = require('../utils/index')

async function run() {
  const {
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
  } = await db(config(false)).catch(utils.handleFatalError)


}

run()
