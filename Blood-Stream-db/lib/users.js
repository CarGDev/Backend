'use strict'

module.exports = function setupUsers (usersModel, platformModel, accessRolModel, passwordModel, contactModel) {
  async function createOrUpdate (users, uuidPlat, uuidAccRol, uuidCont, uuidPass) {
    const cond = {
      where: {
        uuid: users.uuid
      }
    }

    const userExist = await usersModel.findOne({
      where: {
        Nickname: users.Nickname
      }
    })

    if (userExist) {
      return "User Exist"
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
      Object.assign(users, { platformId: platform.id })
    }
    if (contact) {
      Object.assign(users, { contactId: contact.id })
    }
    if (accessRol) {
      Object.assign(users, { accessRolId: accessRol.id })
    }
    if (password) {
      Object.assign(users, { passwordId: password.id })
    }

    const existingusers = await usersModel.findOne(cond)
    if (existingusers) {
      const updated = await usersModel.update(users, cond)
      return updated ? usersModel.findOne(cond) : existingusers
    }

    const result = await usersModel.create(users)
    return result.toJSON()
  }

  async function findById (id) {
    return await usersModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByNickname (Nickname) {
    return await usersModel.findOne({
      where: {
        Nickname
      }
    })
  }

  async function findByUuid (uuid) {
    return await usersModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await usersModel.findAll()
  }

  async function deleteById (Nickname) {
    return await usersModel.destroy({
      where: {
        Nickname
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findByNickname,
    findAll,
    deleteById
  }
}
