'use strict'

const data = require('./mock')
const db = {
  users: data.users,
  contact: data.contact,
  plataform: data.platform,
  accessrol: data.accessrol
}

async function list (tabla) {
  return db[tabla] || []
}

async function get (tabla, id) {
  const col = await list(tabla)
  return col.filter(item => item.UserId === id)[0] || null
}

async function upsert (tabla, data) {
  if (!db[tabla]) {
    db[tabla] = []
  }
  db[tabla].push(data)

  console.log(db)
}

async function remove (tabla, id) {
  return true
}

async function query (tabla, q) {
  const col = await list(tabla)
  const keys = Object.keys(q)
  const key = keys[0]
  return col.filter(item => item[keys[0]] === q[key])[0] || null
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query
}
