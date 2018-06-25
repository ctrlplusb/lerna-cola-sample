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
