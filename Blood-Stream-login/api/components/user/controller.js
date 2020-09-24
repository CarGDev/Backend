'use strict'

const { nanoid } = require('nanoid')
const controller = require('../auth/index')
const utils = require('../../../../Blood-Stream-db/utils/index')
const config = require('../../../../config/config')
let users

module.exports = function (injectedStore) {
  const store = injectedStore
  
  async function list () {
    let { Users } = await store(config(false)).catch(utils.handleFatalError)
    console.log('listing users')
    users = await Users.findAll().catch(utils.handleFatalError)
    return users
  }
  
  async function get (nickname) {
    let { Users } = await store(config(false)).catch(utils.handleFatalError)
    return Users.findByNickname(nickname).catch(utils.handleFatalError)
  }

  async function upsert (body) {
    console.log(body)
    let { Users, Contact, AccessRol, Platform, Password } = await store(config(false)).catch(utils.handleFatalError)
    
    const uuidPlatform = nanoid()
    const uuidContact = nanoid()
    const uuidUser = nanoid()
    const uuidRol = nanoid()
    const uuidPassword = nanoid()
    const user = {
      Nickname: body.nickname,
      Country: body.country,
      Postal_Code: body.postal_Code,
      Birthday: body.birthday,
      Status: body.status,
    }
    if (body.uuid) {
      user.uuid = body.uuid
    } else {
      user.uuid = uuidUser
    }
    console.log(user)
    const platform = {
      uuid: uuidPlatform,
      Platform: body.platform
    }

    await Platform.createOrUpdate(platform).catch(utils.handleFatalError)
    
    const contacts = {
      uuid: uuidContact,
      email: body.email,
      phone: body.phone
    }

    await Contact.createOrUpdate(contacts).catch(utils.handleFatalError)
    
    const accessRols = {
      uuid: uuidRol,
      Rol: body.rol,
      Level: body.level
    }
    await AccessRol.createOrUpdate(accessRols).catch(utils.handleFatalError)
    const pass = {
      uuid: uuidPassword,
      JWT_Password: body.password
    }

    await Password.createOrUpdate(pass).catch(utils.handleFatalError)
   /*  if (body.password) {
      
      await controller.upsert(pass)
    } */
    

    const result = await Users.createOrUpdate(user, uuidPlatform, uuidRol, uuidContact, uuidPassword)

    return result
    
  }

  async function deleteTable (nickname) {
    let { Users } = await store(config(false)).catch(utils.handleFatalError)
    return Users.deleteById(nickname).catch(utils.handleFatalError)
  }

  return {
    list,
    get,
    upsert,
    deleteTable
  }
}
