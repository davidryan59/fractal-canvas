import * as map from '../general/mappings'
import * as ui from '../constants/uiNames'

export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})

export const getInitialButtonsState = () => []

export const getInitialPicklistsState = () => []

// Mandatory id ... len
// Optional: unit ... bgColour
export const makeSliderState =
  (id, label, min, step, max, value, len, unit, displayFn, bgColour) =>
    ({
      type: ui.TYPE_SLIDER,
      id, label, min, step, max, value, len, unit, displayFn, bgColour
    })

export const makeAngleSliderState = (id, value) =>
    makeSliderState(id, 'Angle', -450, 0.1, 450, value, 6, '°')

export const makeScaleSliderState = (id, value) =>
    makeSliderState(id, 'Scale', 0, 0.001, 0.999, value, 5)

export const getInitialSlidersState = () => [
  makeSliderState(ui.SLIDER_ANIMATION_RATE, 'Animation Rate', 0, 1, 9, 3, 2, 'Hz', map.MAP_FRAME_RATES),
  makeSliderState(ui.SLIDER_MAX_ITERATIONS, 'Max Iterations', 0, 1, 16, 8, 2),
  makeSliderState(ui.SLIDER_SCALE_START, 'Size', 0, 1, 990, 80, 3, 'px'),
  makeAngleSliderState(ui.SLIDER_ANGLE_START, 8),
  makeScaleSliderState(ui.SLIDER_SCALE_1_1, 0.80),
  makeAngleSliderState(ui.SLIDER_ANGLE_1_1, -37),
  makeScaleSliderState(ui.SLIDER_SCALE_1_2, 0.85),
  makeAngleSliderState(ui.SLIDER_ANGLE_1_2, 20),
]
