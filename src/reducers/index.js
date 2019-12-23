import { combineReducers } from 'redux'

import windowReducer from './window'
import buttons from './buttons'
import picklists from './picklists'
import sliders from './sliders'
import lastAction from './lastAction'

const appReducer = combineReducers({
  window: windowReducer,
  buttons,
  picklists,
  sliders,
  lastAction
})

export default appReducer
