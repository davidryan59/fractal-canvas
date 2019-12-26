import setupCanvas from './setupCanvas'
import setupFractal from './setupFractal'

import * as ui from '../constants/uiNames'

export const fractalUpdate = (data, getReduxState, objStore) => {
  if (objStore.setup && data && data.id && getReduxState) {
    switch (data.id) {
      case ui.SLIDER_MAX_ITERATIONS:
      case ui.SLIDER_MIN_PX:
      case ui.SLIDER_SCALE_START:
      case ui.SLIDER_ANGLE_START:
      case ui.TOGGLE_REFLECT_TRUNK:
      case ui.SLIDER_RATIO_B2_B1:
      case ui.SLIDER_ID_1_1:
      case ui.SLIDER_SCALE_1_1:
      case ui.SLIDER_ANGLE_1_1:
      case ui.TOGGLE_REFLECT_1_1:
      case ui.SLIDER_ID_1_2:
      case ui.SLIDER_SCALE_1_2:
      case ui.SLIDER_ANGLE_1_2:
      case ui.TOGGLE_REFLECT_1_2:
      case ui.SLIDER_ID_2_1:
      case ui.SLIDER_SCALE_2_1:
      case ui.SLIDER_ANGLE_2_1:
      case ui.TOGGLE_REFLECT_2_1:
      case ui.SLIDER_ID_2_2:
      case ui.SLIDER_SCALE_2_2:
      case ui.SLIDER_ANGLE_2_2:
      case ui.TOGGLE_REFLECT_2_2:
        setupFractal(objStore, getReduxState)
        break

      case ui.SLIDER_CANVAS_X:
        objStore.canvas.elt.width = data.value
        // If canvas width changes, also need to
        // reset starting x-coord of fractal
        setupFractal(objStore, getReduxState)
        break
      case ui.SLIDER_CANVAS_Y:
        objStore.canvas.elt.height = data.value
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
