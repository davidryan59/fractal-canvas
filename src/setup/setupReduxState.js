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
  makeSliderState(ui.SLIDER_MAX_ITERATIONS, 'Max Iterations', 0, 1, 16, 8, 2),
  makeSliderState(ui.SLIDER_LINE_WIDTH, 'Line Width at 100px', 0.2, 0.2, 20, 8, 4, 'px'),
  makeSliderState(ui.SLIDER_LINE_EXP, 'Line Width Exponent', -2, 0.01, -0.01, -0.5, 5),
  makeSliderState(ui.SLIDER_MIN_PX, 'Min Iteration Size', -3, 0.02, 9.9, 3, 5, 'px', map.MAP_EXP_2),
  makeSliderState(ui.SLIDER_MAX_MS, 'Max Calc Time', 0, 0.1, 99.9, 10, 4, 'ms'),
  makeSliderState(ui.SLIDER_MAX_COUNT, 'Max Count', 0, 0.1, 19.9, 13, 6, '', map.MAP_EXP_2_ROUND),

  makeSliderState(ui.SLIDER_ANIMATION_RATE, 'Animation Rate', 0, 1, 9, 3, 2, 'Hz', map.MAP_FRAME_RATES),
  makeSliderState(ui.SLIDER_CANVAS_X, 'Image X', 60, 6, 1920, 0.9 * document.body.clientWidth, 4, 'px'),
  makeSliderState(ui.SLIDER_CANVAS_Y, 'Image Y', 60, 6, 1200, 480, 4, 'px'),

  makeSliderState(ui.SLIDER_SCALE_START, 'Size', 0, 1, 990, 80, 3, 'px'),
  makeAngleSliderState(ui.SLIDER_ANGLE_START, 8),

  makeScaleSliderState(ui.SLIDER_SCALE_1_1, 0.70),
  makeAngleSliderState(ui.SLIDER_ANGLE_1_1, -37),

  makeScaleSliderState(ui.SLIDER_SCALE_1_2, 0.90),
  makeAngleSliderState(ui.SLIDER_ANGLE_1_2, 20),
]
