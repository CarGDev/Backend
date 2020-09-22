'use strict'

module.exports = function setupAccessRol (AccessRolModel) {
  async function createOrUpdate (accessRol) {
    const cond = {
      where: {
        uuid: accessRol.uuid
      }
    }

    const existingAccessRol = await AccessRolModel.findOne(cond)
    if (existingAccessRol) {
      const updated = await AccessRolModel.update(accessRol, cond)
      return updated ? AccessRolModel.findOne(cond) : existingAccessRol
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

  async function deleteById (id) {
    return await AccessRolModel.destroy({
      where: {
        id
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll,
    deleteById
  }
}
