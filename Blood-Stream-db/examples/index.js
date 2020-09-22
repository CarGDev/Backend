'use strict'

const db = require('../index')
const config = require('configuration')
const utils = require('../utils/index')
const accessRol = require('../models/accessRol')
const contact = require('../models/contact')
const password = require('../models/password')

async function run () {
  const {
    Message,
    Password,
    Users,
    GamesCollection,
    Contact,
    AccessRol,
    Platform,
    PlatformGames,
    Lenguages,
    LenguagesGames,
    Genres,
    GenresGames,
    Games,
    UserRating,
    GamesRating,
    GameRating
  } = await db(config(false)).catch(utils.handleFatalError)

  console.log('------------Creation Info---------------')

  const contact = await Contact.createOrUpdate({
    uuid: 'xxx',
    email: 'dummy@gmail.com',
    phone: '4493525020'
  })

  console.log('------------Contact---------------')
  console.log(contact)

  const password = await Password.createOrUpdate({
    uuid: 'y1yy',
    JWT_Password: 'asdflkjalsjdflakjsdfoajwoew'
  }).catch(utils.handleFatalError)

  console.log('------------Password---------------')
  console.log(password)

  const accessRol = await AccessRol.createOrUpdate({
    uuid: 'uuu2',
    Rol: 'Administrador',
    Level: 50
  }).catch(utils.handleFatalError)

  console.log('------------AccessRol---------------')
  console.log(accessRol)

  const platform = await Platform.createOrUpdate({
    uuid: 'yy21',
    Platform: 'Xbox'
  }).catch(utils.handleFatalError)

  console.log('------------Platform---------------')
  console.log(platform)

  const users = await Users.createOrUpdate({
    uuid: 'y1retx',
    Nickname: 'test2',
    Country: 'Mexico',
    Postal_Code: 20208,
    Birthday: '1989-09-15 07:55:10.587458',
    Date_Created: '2020-09-15 07:55:10.587458',
    Status: true
  }, platform.uuid, accessRol.uuid, contact.uuid, password.uuid).catch(utils.handleFatalError)

  console.log('------------Users---------------')
  console.log(users)

  console.log('------------Find Info---------------')
  console.log('------------User Info By ID---------------')
  const userById = await Users.findById(users.id).catch(utils.handleFatalError)
  console.log(userById)
  console.log('------------User Info By Uuid---------------')
  const userByUuid = await Users.findByUuid(users.uuid).catch(utils.handleFatalError)
  console.log(userByUuid)
  console.log('------------User All---------------')
  const userAll = await Users.findAll().catch(utils.handleFatalError)
  console.log(userAll)
  console.log('------------Delete---------------')
  const userDelete = await Users.deleteById(2).catch(utils.handleFatalError)
  console.log(userDelete)
  console.log('------------User All---------------')
  const userAll2 = await Users.findAll().catch(utils.handleFatalError)
  console.log(userAll2)
  console.log('------------User Info By ID---------------')
}

run()
