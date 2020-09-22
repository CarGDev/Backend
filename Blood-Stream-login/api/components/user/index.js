'use strict'

// const store = require('../../../store/mysql')
// const store = require('../../../store/dummy')
const store = require('configuration')
const ctrl = require('./controller')

module.exports = ctrl(store)
