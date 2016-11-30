import React from 'react'
import Route from 'react-router/lib/Route'
import App from './containers/App'
import Menu from './containers/Menu'

import {IndexRoute} from 'react-router'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Menu} />
  </Route>
)
