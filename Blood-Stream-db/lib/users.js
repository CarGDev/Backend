'use strict'
const debug = require('debug')

module.exports = function setupUsers (usersModel, platformModel, accessRolModel, passwordModel, contactModel) {
  async function createOrUpdate (users, uuidPlat, uuidAccRol, uuidCont, uuidPass) {
    const cond = {
      where: {
        uuid: users.uuid
      }
    }
    const existingusers = await usersModel.findOne(cond)
    if (existingusers) {
      const updated = await usersModel.update(users, cond)
      return updated ? usersModel.findOne(cond) : existingusers
    }
    const platform = await platformModel.findOne({
      where: {
        uuid: uuidPlat
      }
    })
    const contact = await contactModel.findOne({
      where: {
        uuid: uuidCont
      }
    })
    const password = await passwordModel.findOne({
      where: {
        uuid: uuidPass
      }
    })
    const accessRol = await accessRolModel.findOne({
      where: {
        uuid: uuidAccRol
      }
    })
    
    if (platform) {
      Object.assign(users, { 
        platformId: platform.id,  
      })
    }
    if (contact) {
      Object.assign(users, { 
        contactId: contact.id 
      })
    }
    if (accessRol) {
      Object.assign(users, { 
        accessRolId: accessRol.id 
      })
    }
    if (password) {
      Object.assign(users, { 
        passwordId: password.id 
      })
    }
    const result = await usersModel.create(users)
    return result.toJSON()
  }

  function findById (id) {
    return usersModel.findById(id)
  }

  function findByUuid (uuid) {
    return usersModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return usersModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }
}
