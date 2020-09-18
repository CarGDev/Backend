'use strict'

const { nanoid } = require('nanoid')
const auth = require('../auth')

const TABLA = 'users'
const ID = 'id'
module.exports = function (injectedStore, injectedCache) {
  let cache = injectedCache
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  if (!cache) {
    cache = require('../../../store/dummy')
  }

  async function list () {
    let users = await cache.list(TABLA)

    if (!users) {
      console.log('Adding to cache')
      users = await store.list(TABLA)
      cache.upsert(TABLA, users)
    } else {
      console.log('Cache exists')
    }
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

  function follow (from, to) {
    return store.upsert(`${TABLA}_follow`, {
      user_from: from,
      user_to: to
    })
  }

  function followers (user) {
    const join = {}
    join[TABLA] = 'user_to'
    const query = { user_from: user }
    return store.query(`${TABLA}_follow`, query, join)
  }

  return {
    list,
    get,
    upsert,
    follow,
    followers
  }
}
