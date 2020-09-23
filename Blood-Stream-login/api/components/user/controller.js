'use strict'

const { nanoid } = require('nanoid')
const auth = require('../../../auth/index')
const utils = require('../../../../Blood-Stream-db/utils/index')
const config = require('../../../../config/config')
let users

module.exports = function (injectedStore) {
  const store = injectedStore
  
  async function list () {
    let { Users } = await store(config(false)).catch(utils.handleFatalError)
    console.log('listing users')
    users = await Users.findAll().catch(utils.handleFatalError)
    return users
  }
  
  async function get (nickname) {
    let { Users } = await store(config(false)).catch(utils.handleFatalError)
    const id = Users.findByNickname(nickname).catch(utils.handleFatalError)
    return Users.findById(id)
  }

  async function upsert (body) {
    const user = {
      name: body.name,
      username: body.username
    }

    if (body.id) {
      user.id = body.id
    } else {
      user.id = nanoid()
    }

    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password
      })
    }

    return store.upsert(TABLA, user)
  }
  async function deleteTable (nickname) {
    let { Users } = await store(config(false)).catch(utils.handleFatalError)
    const id = Users.findByNickname(nickname).catch(utils.handleFatalError)
    return Users.deleteTable(id).catch(utils.handleFatalError)
  }

  return {
    list,
    get,
    upsert,
    deleteTable
  }
}
