const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const user = require('./components/user/user-routes');

const app = express();

app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use('/api/user', user);

app.listen(config.api.port, () => {
    // console.log('Api escuchando en el puerto ', config.api.port);
});