import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeView from '../views/home'
import BooksView from '../views/books'

export default () => (
  <BrowserRouter>
    <Fragment>
      <Route path="/books" component={BooksView} />
      <Route exact path="/" component={HomeView} />
    </Fragment>
  </BrowserRouter>
)
