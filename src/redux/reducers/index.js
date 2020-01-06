import { combineReducers } from 'redux'

import * as wc from './windowCanvas'
import * as ui from './uiItem'

const appReducer = combineReducers({
  window: wc.windowReducer,
  canvas: wc.canvasReducer,
  picklists: ui.picklistsReducer,
  buttons: ui.buttonsReducer,
  sliders: ui.slidersReducer,
})

export default appReducer
