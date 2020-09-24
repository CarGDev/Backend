'use strict'

const bcrypt = require('bcrypt')
const utils = require('../../../../Blood-Stream-db/utils')
const auth = require('../../../auth/index')
const config = require('../../../../config/config')

module.exports = function (injectedStore) {
  let store = injectedStore

  async function login (username, password) {
    const { Password, Users } = await store(config(false)).catch(utils.handleFatalError)
    const users = await Users.findByNickname(username).catch(utils.handleFatalError)
    console.log(users.id)
    let pass = await Password.findById(users.id).catch(utils.handleFatalError)
    console.log(pass.JWT_Password)
    return bcrypt.compare(password, pass.JWT_Password)
      .then(areEquals => {
        if (areEquals === true) {
          // token
          return auth.sign(JSON.parse(JSON.stringify(pass)))
        } else {
          throw new Error('Invalid information')
        }
      })
  }

  async function upsert (data) {
    const authData = {
      uuid: data.uuid
    }

    if (data.password) {
      authData.JWT_Password = await bcrypt.hash(data.JWT_Password, 5)
    }

    let { Password } = await store(config(false)).catch(utils.handleFatalError)

    await Password.createOrUpdate(authData)
  }

  return {
    upsert,
    login
  }
}
