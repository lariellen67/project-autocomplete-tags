/* eslint-disable linebreak-style */
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Main from '~/pages/Main/modal'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
)

export default Router
