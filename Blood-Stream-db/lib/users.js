'use strict'

module.exports = function setupUsers (usersModel) {
  async function createOrUpdate (users) {
    const cond = {
      where: {
        uuid: users.uuid
      }
    }

    const existingusers = await usersModel.findOne(cond)
    if (existingusers) {
      const updated = await usersModel.update(cond)
      return updated ? usersModel.findOne(cond) : existingusers
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
