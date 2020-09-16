'use strict';

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
      const updated = await gamesModel.update(agent, cond)
      return updated ? gamesModel.findOne(cond) : existinggames
    }
    const result = await gamesModel.create(games)
    return result.toJSON()
  }

  function findById (id) {
    return gamesModel.findById(id)
  }

  function findByUuid (uuid) {
    return gamesModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return gamesModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }

}