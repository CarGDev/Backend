
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
  function findById (id) {
    return genreGamesModel.findById(id)
  }

  function findAll () {
    return genreGamesModel.findAll()
  }

  return {
    create,
    findById,
    findAll
  }
}
