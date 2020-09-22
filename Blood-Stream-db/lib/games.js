'use strict'

'use strict'

module.exports = function setupGames (gamesModel) {
  async function createOrUpdate (games) {
    const cond = {
      where: {
        uuid: games.uuid
      }
    }

    const existinggames = await gamesModel.findOne(cond)
    if (existinggames) {
      const updated = await gamesModel.update(cond)
      return updated ? gamesModel.findOne(cond) : existinggames
    }
    const result = await gamesModel.create(games)
    return result.toJSON()
  }

  async function findById (id) {
    return await gamesModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByUuid (uuid) {
    return await gamesModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await gamesModel.findAll()
  }

  async function deleteById (id) {
    return await gamesModel.destroy({
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
