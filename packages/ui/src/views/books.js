import React from 'react'
import Fetch from '../components/fetch'

const url = `/api/books/health`

export default () => (
  <Fetch
    url={url}
    responseType="text"
    render={({ result }) => <div>Result: {result}</div>}
  />
)
