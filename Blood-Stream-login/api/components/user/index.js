'use strict'

// const store = require('../../../store/mysql')
const ctrl = require('./controller')
const store = require('../../../store/mysql')

module.exports = ctrl(store)
