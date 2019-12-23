import setupCanvas from './setupCanvas'
import clearCanvas from './clearCanvas'
import drawCanvas from './drawCanvas'

import * as ui from '../constants/uiNames'

export const fractalUpdate = (data, getReduxState, objStore) => {
  if (objStore.setup && data && data.id && getReduxState) {
    switch (data.id) {
      case ui.SLIDER_MAX_ITERATIONS:
      case ui.SLIDER_ANGLE_1:
      case ui.SLIDER_ANGLE_2:
        clearCanvas(objStore, getReduxState)
        drawCanvas(objStore, getReduxState)
        break

      default:
        // Do nothing
    }
  } else {
    console.log('Fractal update failed for data:', data)
  }
}

// Initialise Redux store before initialising object store
export const fractalInitialise = (objStore, reduxStore) => {
  const getReduxState = reduxStore.getState
  setupCanvas(objStore, getReduxState)
  drawCanvas(objStore, getReduxState)
}
