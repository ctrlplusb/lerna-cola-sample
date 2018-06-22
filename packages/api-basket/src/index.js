/* eslint-disable no-console */

const Config = require('@lerna-cola-sample/config')
const { configureGracefulExit } = require('@lerna-cola-sample/utils-api')
const app = require('./app')

const httpListener = app.listen(Config.servers.basket.port, err => {
  if (err) {
    console.error('Failed to start server')
    console.error(err)
  } else {
    console.log(`Server listening on ${Config.servers.basket.port}`)
  }
})

configureGracefulExit({
  onExit: () =>
    new Promise(resolve => {
      httpListener.close(() => {
        resolve()
      })
    }),
  name: 'api-basket',
})
