'use strict'

module.exports = function setupAccessRol (AccessRolModel, usersModel) {
  async function createOrUpdate (accessRol, users, uuid) {
    const cond = {
      where: {
        uuid: accessRol.uuid
      }
    }

    const usersId = await usersModel.findOne({
      where: { uuid }
    })

    const existingAccessRol = await AccessRolModel.findOne(cond)
    if (existingAccessRol) {
      const updated = await AccessRolModel.update(agent, cond)
      return updated ? AccessRolModel.findOne(cond) : existingAccessRol
    }

    if (usersId) {
      Object.assign(users, { usersId: users.id })
      const result = await AccessRolModel.create(accessRol)
      return result.toJSON()
    }
    const result = await AccessRolModel.create(accessRol)
    return result.toJSON()
  }

  function findById (id) {
    return AccessRolModel.findById(id)
  }

  function findByUuid (uuid) {
    return AccessRolModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return AccessRolModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }
}
