# DataBase

## Usage

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