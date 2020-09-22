'use strict'

module.exports = function setupUserRating (userRatingModel, gamesRatingModel, usersModel) {
  async function create (uuidGamesRating, uuidUsers, userRating) {
    const gamesRating = await gamesRatingModel.findOne({
      where: { uuidGamesRating }
    })
    const users = await usersModel.findOne({
      where: { uuidUsers }
    })

    if (gamesRating && users) {
      Object.assign(userRating, { gamesRatingId: gamesRating.id })
      Object.assign(userRating, { usersId: users.id })
      const result = await userRatingModel.create(userRating)
      return result.toJSON()
    }
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
    return await usersModel.destroy({
      where: {
        id
      }
    })
  }

  return {
    create,
    findById,
    findByUuid,
    findAll,
    deleteById
  }
}
