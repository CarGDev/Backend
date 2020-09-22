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
      const updated = await gamesCollectionModel.update(cond)
      return updated ? gamesCollectionModel.findOne(cond) : existinggamesCollection
    }
    const result = await gamesCollectionModel.create(gamesCollection)
    return result.toJSON()
  }

  async function findById (id) {
    return await gamesCollectionModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByUuid (uuid) {
    return await gamesCollectionModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await gamesCollectionModel.findAll()
  }

  async function deleteById (id) {
    return await gamesCollectionModel.destroy({
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
