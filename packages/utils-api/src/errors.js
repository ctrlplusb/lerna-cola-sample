module.exports = {
  notFound: {
    httpCode: 404,
    errorCode: 404,
    message: 'Path not found',
  },
  internalServerError: {
    httpCode: 500,
    errorCode: 500,
    message: 'Unfortunately an unexpected error occurred',
  },
  invalidData: {
    httpCode: 400,
    errorCode: 400,
    message: 'Your provided invalid data',
  },
  unauthorizedPermissions: {
    httpCode: 401,
    errorCode: 401,
    message: 'You have insufficient privileges to perform this action',
  },
  unauthorized: {
    httpCode: 401,
  },
}
