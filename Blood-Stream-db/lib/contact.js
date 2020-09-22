'use strict'

module.exports = function setupContact (contactModel) {
  async function createOrUpdate (contact) {
    const cond = {
      where: {
        uuid: contact.uuid
      }
    }

    const existingcontact = await contactModel.findOne(cond)
    if (existingcontact) {
      const updated = await contactModel.update(contact, cond)
      return updated ? contactModel.findOne(cond) : existingcontact
    }
    const result = await contactModel.create(contact)
    return result.toJSON()
  }

  function findById (id) {
    return contactModel.findById(id)
  }

  function findByUuid (uuid) {
    return contactModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return contactModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }
}
