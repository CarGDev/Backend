
'use strict'

module.exports = function setupGenresGames (genreGamesModel, genreModel, gamesModel) {
  async function createOrUpdate (uuidGames, uuidGenres, genreGames) {
    const cond = {
      where: {
        uuid: genreGames.uuid
      }
    }

    const games = await gamesModel.findOne({
      where: {
        uuid: uuidGames
      }
    })
    const genre = await genreModel.findOne({
      where: {
        uuid: uuidGenres
      }
    })

    if (games) {
      Object.assign(genreGames, { gamesId: games.id })
    }
    if (genre) {
      Object.assign(genreGames, { genreId: genre.id })
    }

    const existingusers = await genreGamesModel.findOne(cond)
    if (existingusers) {
      const updated = await genreGamesModel.update(genreGames, cond)
      return updated ? genreGamesModel.findOne(cond) : existingusers
    }

    const result = await genreGamesModel.create(genreGames)
    return result.toJSON()
  }

  async function findById (id) {
    return await genreGamesModel.findOne({
      where: {
        id
      }
    })
  }

  async function findByUuid (uuid) {
    return await genreGamesModel.findOne({
      where: {
        uuid
      }
    })
  }

  async function findAll () {
    return await genreGamesModel.findAll()
  }

  async function deleteById (id) {
    return await genreGamesModel.destroy({
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
