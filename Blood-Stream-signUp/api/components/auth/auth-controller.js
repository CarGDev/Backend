'use strict'

const bcrypt = require('bcrypt')
const TABLE = 'auth'

module.exports = function (injectedStore = require('../../../store/dummy')) {
  return {
    upsert: async (data) => {
      const authData = {
        id: data.id
      }

      if (data.username) {
        authData.username = data.username
      }

      if (data.password) {
        authData.password = await bcrypt.hash(data.password, 10)
      }

      return injectedStore.upsert(TABLE, authData)
    }
  }
}
