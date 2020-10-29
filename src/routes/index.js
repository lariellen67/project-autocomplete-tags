import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainOne from '~/pages/Main'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainOne} />
    </Switch>
  </BrowserRouter>
)

export default Router
