'use strict'

const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
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
    let { Users, Contact, AccessRol, Platform, Password } = await store(config(false)).catch(utils.handleFatalError)
    
    const userExist = await Users.userExists(body.nickname).catch(utils.handleFatalError)
    const contactExist = await Contact.findByEmail(body.email).catch(utils.handleFatalError)
    console.log(userExist)
    console.log(contactExist)
    if (userExist || contactExist) {
      return 'User or Email Exist'
    }

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

    const authData = { uuid: uuidPassword }
    if (body.password) {
      authData.JWT_Password = await bcrypt.hash(body.password, 5)
    }

    console.log(authData)

    await Password.createOrUpdate(authData).catch(utils.handleFatalError)
    

    const result = await Users.createOrUpdate(user, uuidPlatform, uuidRol, uuidContact, uuidPassword, body.email)

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
