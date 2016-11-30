import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import {apiMiddleware} from 'redux-api-middleware';
import {routerMiddleware, routerReducer} from 'react-router-redux'
import hashHistory from 'react-router/lib/hashHistory'

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);


export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    preloadedState,
    compose(
      applyMiddleware(
        apiMiddleware,
        routerMiddleware(hashHistory),
        thunk,
        createLogger({expand: true,diff: true})
      )
    )
  )
}
