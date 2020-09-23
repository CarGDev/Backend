'use strict'

const bcrypt = require('bcrypt')
const utils = require('../../../../Blood-Stream-db/utils')
const auth = require('../../../auth/index')
const TABLA = 'password'

module.exports = function (injectedStore) {
  let store = injectedStore

  async function login (username, password) {
    const { Password, Users } = await store(config(false)).catch(utils.handleFatalError)
    
    const users = Users.findByNickname(username).catch(utils.handleFatalError)
    const pass = Password.findByid(users.id).catch(utils.handleFatalError)

    return bcrypt.compare(password, pass.JWT_Password)
      .then(areEquals => {
        if (areEquals === true) {
          // token
          return auth.sign(JSON.parse(JSON.stringify(data)))
        } else {
          throw new Error('Invalid information')
        }
      })
  }

  async function upsert (data) {
    const authData = {
      id: data.id
    }

    if (data.username) {
      authData.username = data.username
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5)
    }

    return store.upsert(TABLA, authData)
  }

  return {
    upsert,
    login
  }
}
