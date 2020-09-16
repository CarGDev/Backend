'use strict'

module.exports = function setupGamesRating (gamesRatingModel) {
  async function createOrUpdate (gamesRating) {
    const cond = {
      where: {
        uuid: gamesRating.uuid
      }
    }

    const existinggamesRating = await gamesRatingModel.findOne(cond)
    if (existinggamesRating) {
      const updated = await gamesRatingModel.update(agent, cond)
      return updated ? gamesRatingModel.findOne(cond) : existinggamesRating
    }
    const result = await gamesRatingModel.create(gamesRating)
    return result.toJSON()
  }

  function findById (id) {
    return gamesRatingModel.findById(id)
  }

  function findByUuid (uuid) {
    return gamesRatingModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return gamesRatingModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }

}