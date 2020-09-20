'use strict'

module.exports = function setupLanguagesGames (gamesModel, lenguagesModel, lenguagesGamesModel) {
  async function create (uuidGames, uuidLenguages, lenguagesGames) {
    const games = await gamesModel.findOne({
      where: { uuidGames }
    })
    const lenguages = await lenguagesModel.findOne({
      where: { uuidLenguages }
    })

    if (games && lenguages) {
      Object.assign(lenguagesGames, { gamesId: games.id })
      Object.assign(lenguagesGames, { lenguagesId: lenguages.id })
      const result = await lenguagesGamesModel.create(lenguagesGames)
      return result.toJSON()
    }
  }
  function findById (id) {
    return lenguagesGamesModel.findById(id)
  }

  function findAll () {
    return lenguagesGamesModel.findAll()
  }

  return {
    create,
    findById,
    findAll
  }
}
