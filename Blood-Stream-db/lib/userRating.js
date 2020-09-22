'use strict'

module.exports = function setupUserRating (userRatingModel, gamesRatingModel, usersModel) {
  async function createOrUpdate (uuidGamesRating, uuidUsers, userRating) {
    const cond = {
      where: {
        uuid: userRating.uuid
      }
    }

    const gamesRating = await gamesRatingModel.findOne({
      where: {
        uuid: uuidGamesRating
      }
    })
    const users = await usersModel.findOne({
      where: {
        uuid: uuidUsers
      }
    })

    if (gamesRating) {
      Object.assign(userRating, { gamesRatingId: gamesRating.id })
    }
    if (users) {
      Object.assign(userRating, { usersId: users.id })
    }

    const existingusers = await userRatingModel.findOne(cond)
    if (existingusers) {
      const updated = await userRatingModel.update(userRating, cond)
      return updated ? userRatingModel.findOne(cond) : existingusers
    }

    const result = await userRatingModel.create(userRating)
    return result.toJSON()
  }

  function findById (id) {
    return userRatingModel.findOne({
      where: {
        id
      }
    })
  }

  function findByUuid (uuid) {
    return userRatingModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return userRatingModel.findAll()
  }

  async function deleteById (id) {
    return await userRatingModel.destroy({
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
