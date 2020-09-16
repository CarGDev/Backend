'use strict'

module.exports = function setupGamesCollection (gamesCollectionModel) {
  async function createOrUpdate (gamesCollection) {
    const cond = {
      where: {
        uuid: gamesCollection.uuid
      }
    }

    const existinggamesCollection = await gamesCollectionModel.findOne(cond)
    if (existinggamesCollection) {
      const updated = await gamesCollectionModel.update(agent, cond)
      return updated ? gamesCollectionModel.findOne(cond) : existinggamesCollection
    }
    const result = await gamesCollectionModel.create(gamesCollection)
    return result.toJSON()
  }

  function findById (id) {
    return gamesCollectionModel.findById(id)
  }

  function findByUuid (uuid) {
    return gamesCollectionModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return gamesCollectionModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }

}