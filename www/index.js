import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import hashHistory from 'react-router/lib/hashHistory'
import syncHistoryWithStore from 'react-router-redux/lib/sync'
import Root from './src/modules/containers/Root'
import configureStore from './src/store/configureStore'

/* Import SCSS */
import './src/assets/scss/ratchet.scss'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
