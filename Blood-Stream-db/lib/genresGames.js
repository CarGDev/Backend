
'use strict'

module.exports = function setupGenresGames (genreGamesModel, genreModel, gamesModel) {
  async function create (uuidGenres, uuidGames, genres) {
    const genresInfo = await genreModel.findOne({
      where: { uuidGenres }
    })
    const games = await gamesModel.findOne({
      where: { uuidGames }
    })

    if (genresInfo && games) {
      Object.assign(genres, { genresId: genres.id })
      Object.assign(genres, { gamesId: games.id })
      const result = await genreGamesModel.create(genres)
      return result.toJSON()
    }
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
    create,
    findById,
    findByUuid,
    findAll,
    deleteById
  }
}
