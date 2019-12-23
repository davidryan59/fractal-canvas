import setupCanvas from './setupCanvas'
import setupFractal from './setupFractal'

import * as ui from '../constants/uiNames'

export const fractalUpdate = (data, getReduxState, objStore) => {
  if (objStore.setup && data && data.id && getReduxState) {
    switch (data.id) {
      case ui.SLIDER_MAX_ITERATIONS:
      case ui.SLIDER_SCALE_1_1:
      case ui.SLIDER_ANGLE_1_1:
      case ui.SLIDER_SCALE_1_2:
      case ui.SLIDER_ANGLE_1_2:
      case ui.SLIDER_SCALE_START:
      case ui.SLIDER_ANGLE_START:
        setupFractal(objStore, getReduxState)
        break

      default:
        // Do nothing
    }
  } else {
    console.log('Fractal update failed for data:', data)
  }
}

// Initialise Redux store before initialising object store
export const fractalInitialise = (objStore, getReduxState) => {
  setupCanvas(objStore, getReduxState)
  setupFractal(objStore, getReduxState)
}
