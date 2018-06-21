const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')

const dotenvFilePath = path.resolve(__dirname, '../../../.env')

if (fs.existsSync(dotenvFilePath)) {
  dotenv.config({
    path: dotenvFilePath,
    encoding: 'utf8',
  })
}

module.exports = {
  servers: {
    basket: {
      port: parseInt(process.env.REACT_APP_API_BASKET_PORT, 10),
    },
    books: {
      port: parseInt(process.env.REACT_APP_API_BOOKS_PORT, 10),
    },
  },
}
