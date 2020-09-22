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
      const updated = await gamesRatingModel.update(cond)
      return updated ? gamesRatingModel.findOne(cond) : existinggamesRating
    }
    const result = await gamesRatingModel.create(gamesRating)
    return result.toJSON()
  }

  async function findById (id) {
    return await gamesRatingModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByUuid (uuid) {
    return await gamesRatingModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await gamesRatingModel.findAll()
  }

  async function deleteById (id) {
    return await usersModel.destroy({
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
