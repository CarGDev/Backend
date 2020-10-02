'use strict'

const debug = require('debug')('Blood-Stream:db:setup')

module.exports = function config (configExtra) {
  let config = null

  if (configExtra) {
    config = {
      database: process.env.DB_NAME || 'd77u0bnsf1n1qr',
      username: process.env.DB_USER || 'wyrtcsghhfjztx',
      password: process.env.DB_PASS || '16553f8747bc39e8d06c0fbf309b34af0d2f15c1c71aac2fc28536fdc60f172e',
      host: process.env.DB_HOST || 'ec2-50-16-221-180.compute-1.amazonaws.com',
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      loggin: s => debug(s),
      setup: true
    }
  } else {
    config = {
      database: process.env.DB_NAME || 'd77u0bnsf1n1qr',
      username: process.env.DB_USER || 'wyrtcsghhfjztx',
      password: process.env.DB_PASS || '16553f8747bc39e8d06c0fbf309b34af0d2f15c1c71aac2fc28536fdc60f172e',
      host: process.env.DB_HOST || 'ec2-50-16-221-180.compute-1.amazonaws.com',
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
	    dialect: 'postgres',
      logging: s => debug(s)
    }
  }

  return config
}
