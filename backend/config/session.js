const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

module.exports = app => {
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.SECRET,
      cookie: { maxAge: 24 * 60 * 60 * 1000 },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
      })
    })
  )
}