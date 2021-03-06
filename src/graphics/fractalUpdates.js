import setupCanvas from './setupCanvas'
import setupFractal from './setupFractal'
import startMainLoop from './startMainLoop'
import { WINDOW_RESIZE } from '../redux/reducers/windowCanvas'
import { verbosity } from '../_params'
import * as ui from '../general/uiNames'
import { buttonActive } from '../redux/getters/button'

const dealWithAnimateToggle = (objStore, getReduxState) => {
  const isNowActive = buttonActive(getReduxState(), ui.TOGGLE_ANIMATE)
  if (verbosity) console.log(`Animation state changed to ${isNowActive}`)
  if (isNowActive) startMainLoop(objStore, getReduxState)
}

export const fractalUpdate = (action, getReduxState, objStore) => {
  if (objStore.setup && action && getReduxState) {
    if (action.type === WINDOW_RESIZE) {
      // Canvas size may have changed, reset fractal
      setupFractal(objStore, getReduxState)
    } else {
      switch (action.payload.id) {
        case ui.SLIDER_MAX_ITERATIONS:
        case ui.SLIDER_MIN_PX:
        case ui.SLIDER_MAX_COUNT:
        case ui.SLIDER_MAX_CALC_TIME_US:
        case ui.SLIDER_MAX_DRAW_TIME_US:
        case ui.SLIDER_HULL_ITERATIONS:
        case ui.SLIDER_HULL_ROUNDING:
        case ui.SLIDER_HULL_MAX_CALC_TIME_US:
        case ui.SLIDER_START_X:
        case ui.SLIDER_START_Y:
        case ui.SLIDER_SCALE_START:
        case ui.SLIDER_ANGLE_START:
        case ui.TOGGLE_REFLECT_START:
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

        case ui.TOGGLE_ANIMATE:
          dealWithAnimateToggle(objStore, getReduxState)
          break

        case ui.SLIDER_CANVAS_Y:
          objStore.canvas.elt.height = action.payload.value
          // No need to setupFractal, coords are still fine
          break

        default:
          // Do nothing
      }
    }
  }
}

// Initialise Redux store before initialising object store
export const fractalInitialise = (objStore, getReduxState) => {
  setupCanvas(objStore, getReduxState)
  setupFractal(objStore, getReduxState)
}
