import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import RedirectPage from '../pages/RedirectPage'
import StatsPage from '../pages/StatsPage'
import NotFoudPage from '../pages/NotFoudPage'

function MyRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/:code" component={RedirectPage} exact />
        <Route path="/:code/stats" component={StatsPage} exact />
        <Route path="/*" component={NotFoudPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default MyRoutes
