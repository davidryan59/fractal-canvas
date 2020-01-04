import { combineReducers } from 'redux'

import * as wc from './windowCanvas'
import * as ui from './uiItem'

const lastActionReducer = (state = {}, action) => action

const appReducer = combineReducers({
  lastAction: lastActionReducer,
  window: wc.windowReducer,
  canvas: wc.canvasReducer,
  buttons: ui.buttonsReducer,
  picklists: ui.picklistsReducer,
  sliders: ui.slidersReducer,
})

export default appReducer
