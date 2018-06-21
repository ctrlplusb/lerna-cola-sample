const Errors = require('./errors')

function notFound(res, path) {
  res
    .status(Errors.notFound.httpCode)
    .json({
      success: false,
      payload: path,
      error: {
        code: Errors.notFound.errorCode,
        message: Errors.notFound.message,
      },
    })
    .end()
}

function invalidData(res, validationResults) {
  res
    .status(Errors.invalidData.httpCode)
    .json({
      success: false,
      payload: validationResults,
      error: {
        code: Errors.invalidData.errorCode,
        message: Errors.invalidData.message,
      },
    })
    .end()
}

function unauthorizedPermissions(res) {
  res
    .status(Errors.unauthorized.httpCode)
    .json({
      success: false,
      error: {
        code: Errors.unauthorizedPermissions.errorCode,
        message: Errors.unauthorizedPermissions.message,
      },
    })
    .end()
}

function serverError(res, err) {
  res
    .status(Errors.internalServerError.httpCode)
    .json({
      success: false,
      error: {
        code: 500,
        message: Errors.internalServerError.message,
        stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
      },
    })
    .end()
}

function success(res, payload) {
  res
    .status(200)
    .json({
      success: true,
      payload,
    })
    .end()
}

module.exports = {
  notFound,
  invalidData,
  unauthorizedPermissions,
  serverError,
  success,
}
