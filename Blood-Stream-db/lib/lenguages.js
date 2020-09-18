'use strict'

'use strict'

module.exports = function setupLenguages (lenguagesModel) {
  async function createOrUpdate (lenguages) {
    const cond = {
      where: {
        uuid: lenguages.uuid
      }
    }

    const existinglenguages = await lenguagesModel.findOne(cond)
    if (existinglenguages) {
      const updated = await lenguagesModel.update(agent, cond)
      return updated ? lenguagesModel.findOne(cond) : existinglenguages
    }
    const result = await lenguagesModel.create(lenguages)
    return result.toJSON()
  }

  function findById (id) {
    return lenguagesModel.findById(id)
  }

  function findByUuid (uuid) {
    return lenguagesModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return lenguagesModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }
}
