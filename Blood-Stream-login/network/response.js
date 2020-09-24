'use strict'

exports.success = function (req, res, message, status) {
  const statusCode = status || 200
  const statusMessage = message || ''
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  res.status(status).send({
    error: false,
    status: statusCode,
    body: statusMessage
  })
}

exports.error = function (req, res, message, status) {
  const statusCode = status || 500
  const statusMessage = message || 'Internal server error'
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: statusMessage
  })
}
