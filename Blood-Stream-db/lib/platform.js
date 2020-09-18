'use strict'

module.exports = function setupPlatform (platformModel) {
  async function createOrUpdate (platform) {
    const cond = {
      where: {
        uuid: platform.uuid
      }
    }

    const existingplatform = await platformModel.findOne(cond)
    if (existingplatform) {
      const updated = await platformModel.update(agent, cond)
      return updated ? platformModel.findOne(cond) : existingplatform
    }
    const result = await platformModel.create(platform)
    return result.toJSON()
  }

  function findById (id) {
    return platformModel.findById(id)
  }

  function findByUuid (uuid) {
    return platformModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return platformModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }
}
