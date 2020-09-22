'use strict'

// const store = require('../../../store/mysql')

const store = require('../../../../config/config')
// const store = require('../../../store/dummy')
const ctrl = require('./controller')

module.exports = ctrl(store)
