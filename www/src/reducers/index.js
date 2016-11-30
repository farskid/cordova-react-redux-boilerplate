import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import entities from './entities'

const rootReducer = combineReducers({
  entities,
  routing
})

export default rootReducer
