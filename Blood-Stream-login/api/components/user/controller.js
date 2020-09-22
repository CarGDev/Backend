'use strict'

const { nanoid } = require('nanoid')
const auth = require('../auth')
const utils = require('../../../../Blood-Stream-db/utils/index')
const config = require('../../../../config/config')
const TABLA = 'users'
const ID = 'UserId'

module.exports = async function (injectedStore) {
  const { Users } = await injectedStore(config(false)).catch(utils.handleFatalError)

  async function list () {
    console.log('listing users')
    users = await Users.findAll().catch(utils.handleFatalError)
    return users
  }

  function get (id) {
    return store.get(TABLA, id, ID)
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
  async function deleteTable (id) {

  }

  return {
    list,
    get,
    upsert,
    deleteTable
  }
}
