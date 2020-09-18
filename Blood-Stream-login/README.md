# Backend

This is the backend configuration for the project BloodStream

contributors for backend:

* Carlos Gutierrez <ingecarlos.gutierrez@gmail.com>
* Stiven Mosquera <moquera012@gmail.com>

license used: 
* MIT


---
## Configuration

### Usage

``` js
module.exports = function config (configExtra) {
  let config = null

  if (configExtra) {
    config = {
      database: process.env.DB_NAME || 'bloodstreamdb',
      username: process.env.DB_USER || 'bloodstream',
      password: process.env.DB_PASS || 'password',
      hostname: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      loggin: s => debug(s),
      setup: true
    }
  } else {
    config = {
      database: process.env.DB_NAME || 'bloodstreamdb',
      username: process.env.DB_USER || 'bloodstream',
      password: process.env.DB_PASS || 'password',
      hostname: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      loggin: s => debug(s)
    }
  }

  return config
}
```
---
## DataBase

### Usage

``` js
const setupDataBase = require('Blood-Stream-db')

setupDataBase(config).then(db => {
  const {
    message,
    password,
    users,
    gamesCollection,
    contact,
    accessRol,
    platform,
    platformGames,
    lenguages,
    lenguagesGames,
    genres,
    genresGames,
    games,
    userRating,
    gamesRating,
    gameRating
  } = db
}).catch(err => console.error(err))

```

---
