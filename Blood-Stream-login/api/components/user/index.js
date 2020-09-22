'use strict'

const store = require('../../../store/mysql')
// const store = require('../../../store/dummy')
// const store = require('databasePostgres')
const ctrl = require('./controller')

module.exports = ctrl(store)
