'use strict'

module.exports = function setupMessages (messagesModel) {
  async function createOrUpdate (messages) {
    const cond = {
      where: {
        uuid: messages.uuid
      }
    }

    const existingmessages = await messagesModel.findOne(cond)
    if (existingmessages) {
      const updated = await messagesModel.update(agent, cond)
      return updated ? messagesModel.findOne(cond) : existingmessages
    }
    const result = await messagesModel.create(messages)
    return result.toJSON()
  }

  function findById (id) {
    return messagesModel.findById(id)
  }

  function findByUuid (uuid) {
    return messagesModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return messagesModel.findAll()
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll
  }

}