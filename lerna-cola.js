const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')

const dotenvFilePath = path.resolve(__dirname, './.env')

if (fs.existsSync(dotenvFilePath)) {
  dotenv.config({
    path: dotenvFilePath,
    encoding: 'utf8',
  })
}

module.exports = {
  packages: {
    '@lerna-cola-sample/api-basket': {
      developPlugin: 'plugin-develop-server',
      deployPlugin: {
        name: '@lerna-cola/plugin-deploy-now',
        options: {
          passThroughEnvVars: ['REACT_APP_API_BASKET_PORT'],
          settings: {
            alias: 'api-basket-lerna-cola-sample',
          },
        },
      },
    },
    '@lerna-cola-sample/api-books': {
      developPlugin: 'plugin-develop-server',
      deployPlugin: {
        name: '@lerna-cola/plugin-deploy-now',
        options: {
          passThroughEnvVars: ['REACT_APP_API_BOOKS_PORT'],
          settings: {
            alias: 'api-books-lerna-cola-sample',
          },
        },
      },
    },
    '@lerna-cola-sample/ui': {
      buildPlugin: {
        name: 'plugin-script',
        options: {
          scriptName: 'build',
        },
      },
      developPlugin: {
        name: 'plugin-script',
        options: {
          scriptName: 'start',
        },
      },
      deployPlugin: {
        name: '@lerna-cola/plugin-deploy-now',
        options: {
          passThroughEnvVars: [
            'REACT_APP_API_BASKET_PORT',
            'REACT_APP_API_BOOKS_PORT',
          ],
          settings: {
            alias: 'lerna-cola-sample',
            static: {
              public: 'build',
            },
            type: 'static',
          },
        },
      },
    },
  },
}
