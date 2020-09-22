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

  const message = await Message.createOrUpdate({
    uuid: 'yyywe',
    Message: 'lorem ipsum ajksdflkashdfljkahq qwouiflafkf mi ra asdfanflqwk',
    Post_Like: false
  }, users.uuid)

  console.log('------------Message---------------')
  console.log(message)


}

run()
