'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const config = require('./config')
const user = require('./api/components/user/network')
const errors = require('./network/errors')
const app = express()
const conf = require('../config/config')
const path = require('path')

const options = {
  key: fs.readFileSync(path.resolve + '/host.key'),
  cert: fs.readFileSync(path.resolve + '/host.crt')
};

// Setup server
const server = require('https').createServer(options, app);

server.use(cors())
server.use(bodyParser.json())

const swaggerDoc = require('./api/swagger.json')
const auth = require('./api/components/auth/network')

// ROUTER
server.use('/user', user)
server.use('/user', auth)
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

server.use(errors)

server.listen(conf(false).port, () => {
  console.log(path.resolve)
  console.log(process.env.NODE_ENV)
  
  console.log(conf(false).database)
  console.log(conf(false).hostname)
  /* console.log(`Api escuchando en el puerto ${config.api.port}`) */
  console.log(`Api escuchando en el puerto ${conf(false).port}`)
})
