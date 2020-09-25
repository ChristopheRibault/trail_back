import '@babel/polyfill';
const express = require('express');
const morgan = require('morgan');
const _Promise = require('bluebird');

import * as _controllers from './controllers';
import * as _validators from './validators';

global.rootpath = __dirname;
global.Promise = _Promise;
global.controllers = _controllers;
global.validators = _validators;

const { createRouter } = require('./routes');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(
  process.env.APP_PORT,
  () => {
    console.log(`listening on port ${process.env.APP_PORT}`);
  }
);

createRouter(app);

