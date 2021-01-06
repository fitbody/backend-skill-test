require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const session = require("./config/session")
const passport = require('./config/passport');

mongoose
  .connect(process.env.DB || 'mongodb://localhost/backend-skill-test', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTENDPOINT]
  })
);
session(app)
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));


app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/todo', require('./routes/todo'));

// Uncomment this line for production
// app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;
