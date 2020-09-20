'use strict'

module.exports = function setupPassword (passwordModel) {
  async function createOrUpdate (password) {
    const cond = {
      where: {
        uuid: password.uuid
      }
    }

    const existingpassword = await passwordModel.findOne(cond)
    if (existingpassword) {
      const updated = await passwordModel.update(cond)
      return updated ? passwordModel.findOne(cond) : existingpassword
    }
    const result = await passwordModel.create(password)
    return result.toJSON()
  }

  function findById (id) {
    return passwordModel.findById(id)
  }

  function findByUuid (uuid) {
    return passwordModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return passwordModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }
}
