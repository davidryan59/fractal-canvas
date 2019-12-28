import { combineReducers } from 'redux'

import lastAction from './lastAction'
import windowReducer from './window'
import canvas from './canvas'
import buttons from './buttons'
import picklists from './picklists'
import sliders from './sliders'

const appReducer = combineReducers({
  lastAction,
  window: windowReducer,
  canvas,
  buttons,
  picklists,
  sliders,
})

export default appReducer
