import React from 'react'
import Fetch from '../components/fetch'

const url = `${process.env.REACT_APP_API_BOOKS_URL}/health`

export default () => (
  <Fetch
    url={url}
    responseType="text"
    render={({ result }) => <div>Result: {result}</div>}
  />
)
