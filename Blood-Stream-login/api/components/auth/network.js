'use strict'

const express = require('express')

const response = require('../../../network/response')
const controller = require('./index')
const router = express.Router()

router.post('/login', login)
router.post('/pass-retrieve', retrievePass)

function login (req, res, next) {
  controller.login(req.body.nickname, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200)
    })
    .catch(next)
}

function retrievePass (req, res, next) {
  controller.retrievePass(req.body.nickname, req.body.password)
    .then((token) => {
      response.success(req, res, token, 201)
    })
    .catch(next)
}

module.exports = router
