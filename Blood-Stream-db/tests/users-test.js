'use strict'

const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const usersFixture = require('./fixtures/users')
const config = {
  loggin: function () {}
}

/* const UsersStub = {
  belongsTo: sinon.spy()
} */

const single = Object.assign({}, usersFixture.single)
const id = 1
const uuid = 'yyy'
let UsersStub = null
let db = null
let sandbox = null
const connectedArgs = {
  where: { connected: true }
}

const usernameArgs = {
  where: { username: 'wyrtcsghhfjztx', connected: true }
}

const uuidArgs = {
  where: {
    uuid
  }
}

const newUser = {
  uuid: 'y1retx',
  Nickname: 'test2',
  Country: 'Mexico',
  Postal_Code: 20208,
  Birthday: '1989-09-15 07:55:10.587458',
  Date_Created: '2020-09-15 07:55:10.587458',
  Status: true
}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()
  UsersStub = {
    hasMany: sandbox.spy()
  }
  const setupDatabase = proxyquire('../index.js', {
    './models/users': () => UsersStub
  })
  db = await setupDatabase(config)
})

test.afterEach(() => {
  sandbox && sandbox.restore()
})

test('users', t => {
  t.truthy(db.users, 'Users table should exist')
})

test.serial('Setup', t => {
  t.true(UsersStub.hasMany.called, 'UsersModel.hasMany was executed')
})
