import React from 'react'
import { Route, Switch } from 'react-router'

import { HomePage, ProductPage } from './views'

export const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  )
}
