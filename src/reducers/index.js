import { combineReducersWithOuterState } from '../redux-extensions'

import windowReducer from './window'

const lastAction = (state = {}, action, topState) => action

const appReducer = combineReducersWithOuterState({
  window: windowReducer,
  lastAction
})

export default appReducer
