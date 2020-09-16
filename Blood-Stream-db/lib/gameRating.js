'use strict';

module.exports = function setupGameRating (gameRatingModel, gamesRatingModel, gamesModel) {
  async function create(uuidGamesRating, uuidGames, gameRating) {
    const gamesRating = await gamesRatingModel.findOne({
      where: { uuidGamesRating }
    })
    const games = await gamesModel.findOne({
      where: { uuidGames }
    })

    if (gamesRating && games) {
      Object.assign(gameRating, { gamesRatingId: gamesRating.id })
      Object.assign(gameRating, { gamesId: games.id })
      const result = await gameRatingModel.create(gameRating)
      return result.toJSON()
    }
  }
}