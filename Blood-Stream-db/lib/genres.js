'use strict'

module.exports = function setupGenres (genresModel) {
  async function createOrUpdate (genres) {
    const cond = {
      where: {
        uuid: genres.uuid
      }
    }

    const existinggenres = await genresModel.findOne(cond)
    if (existinggenres) {
      const updated = await genresModel.update(cond)
      return updated ? genresModel.findOne(cond) : existinggenres
    }
    const result = await genresModel.create(genres)
    return result.toJSON()
  }

  function findById (id) {
    return genresModel.findById(id)
  }

  function findByUuid (uuid) {
    return genresModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return genresModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }
}
