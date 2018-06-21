const Response = require('./response')

// eslint-disable-next-line no-unused-vars
module.exports = function errorHandlerMiddleware(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.error(err)

  Response.serverError(res, err)
}
