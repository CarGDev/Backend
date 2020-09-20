'use strict'

module.exports = function setupPlatformGames (gamesModel, platformModel, platformGamesModel) {
  async function create (uuidGames, uuidPlatform, platformGames) {
    const games = await gamesModel.findOne({
      where: { uuidGames }
    })
    const platform = await platformModel.findOne({
      where: { uuidPlatform }
    })

    if (games && platform) {
      Object.assign(platformGames, { gamesId: games.id })
      Object.assign(platformGames, { platformId: platform.id })
      const result = await platformGamesModel.create(platformGames)
      return result.toJSON()
    }
  }
  function findById (id) {
    return platformGamesModel.findById(id)
  }

  function findAll () {
    return platformGamesModel.findAll()
  }

  return {
    create,
    findById,
    findAll
  }
}
