'use strict'

module.exports = function setupGameRating (gameRatingModel, gamesRatingModel, gamesModel) {
  async function createOrUpdate (uuidGames, uuidGamesRating, gameRating) {
    const cond = {
      where: {
        uuid: gameRating.uuid
      }
    }

    const games = await gamesModel.findOne({
      where: {
        uuid: uuidGames
      }
    })
    const gamesRating = await gamesRatingModel.findOne({
      where: {
        uuid: uuidGamesRating
      }
    })

    if (games) {
      Object.assign(gameRating, { gamesId: games.id })
    }
    if (gamesRating) {
      Object.assign(gameRating, { gamesRatingId: gamesRating.id })
    }

    const existingusers = await gameRatingModel.findOne(cond)
    if (existingusers) {
      const updated = await gameRatingModel.update(gameRating, cond)
      return updated ? gameRatingModel.findOne(cond) : existingusers
    }

    const result = await gameRatingModel.create(gameRating)
    return result.toJSON()
  }

  async function findById (id) {
    return await gameRatingModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByUuid (uuid) {
    return await gameRatingModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await gameRatingModel.findAll()
  }

  async function deleteById (id) {
    return await gameRatingModel.destroy({
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
