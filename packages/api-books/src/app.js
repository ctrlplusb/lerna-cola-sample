const express = require('express')
const bodyParser = require('body-parser')
const { unhandledErrorMiddleware } = require('@lerna-cola-sample/utils-api')
const routes = require('./routes')

const app = express()
  // parse application/x-www-form-urlencoded
  .use(
    bodyParser.urlencoded({
      extended: true,
    }),
  )
  // parse application/json
  .use(bodyParser.json())
  // api routes
  .use('/api/books', routes)
  // Unhandled errors
  .use(unhandledErrorMiddleware)

module.exports = app
