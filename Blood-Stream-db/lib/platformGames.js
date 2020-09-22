'use strict'

module.exports = function setupPlatformGames (gamesModel, platformModel, platformGamesModel) {
  async function createOrUpdate (uuidGames, uuidPlatforms, platformsGames) {
    const cond = {
      where: {
        uuid: platformsGames.uuid
      }
    }

    const games = await gamesModel.findOne({
      where: { 
        uuid: uuidGames 
      }
    })
    const platform = await platformModel.findOne({
      where: { 
        uuid: uuidPlatforms 
      }
    })

    if (games) {
      Object.assign(platformsGames, { gamesId: games.id })
    }
    if (platform) {
      Object.assign(platformsGames, { platformId: platform.id })
    }

    const existingusers = await platformsGamesModel.findOne(cond)
    if (existingusers) {
      const updated = await platformsGamesModel.update(platformsGames, cond)
      return updated ? platformsGamesModel.findOne(cond) : existingusers
    }

    const result = await platformsGamesModel.create(platformsGames)
    return result.toJSON()
  }

  function findById (id) {
    return platformGamesModel.findOne({
      where: {
        id
      }
    })
  }

  function findByUuid (uuid) {
    return platformGamesModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return platformGamesModel.findAll()
  }

  async function deleteById (id) {
    return await platformGamesModel.destroy({
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
