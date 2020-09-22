'use strict'

// const store = require('../../../store/mysql')
// const store = require('../../../store/dummy')
const store = require('../../../../Blood-Stream-db/setup')
const ctrl = require('./controller')

module.exports = ctrl(store)
