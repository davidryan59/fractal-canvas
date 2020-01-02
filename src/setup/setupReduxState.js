import { initialCanvasHeight, getCanvasWidthFromWindowWidth } from '../_params'
import * as map from '../general/mappings'
import * as ui from '../general/uiNames'


export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})


export const getInitialCanvasState = () => ({
  width: getCanvasWidthFromWindowWidth(window.innerWidth),
  height: initialCanvasHeight
})


// PICKLISTS
export const getInitialPicklistsState = () => []


// BUTTONS / TOGGLES
export const makeToggleState =
  (id, labelInactive, labelActive, isActive, widthPx) =>
    ({
      type: ui.TYPE_TOGGLE,
      id, labelInactive, labelActive, isActive, widthPx
    })

export const makeReflectToggleState = id =>
    makeToggleState(id, 'Normal', 'REFLECT L/R', false, 140)

export const getInitialButtonsState = () => [
  makeReflectToggleState(ui.TOGGLE_REFLECT_START),
  makeReflectToggleState(ui.TOGGLE_REFLECT_1_1),
  makeReflectToggleState(ui.TOGGLE_REFLECT_1_2),
  makeReflectToggleState(ui.TOGGLE_REFLECT_2_1),
  makeReflectToggleState(ui.TOGGLE_REFLECT_2_2),
  makeToggleState(ui.TOGGLE_ANIMATE, 'Animation OFF', 'Animation ON', true, 130),
  makeToggleState(ui.TOGGLE_DISPLAY_STATS, 'Stats OFF', 'Stats ON', true, 100),
  makeToggleState(ui.TOGGLE_DISPLAY_STATEVIEW, 'State Viewer OFF', 'State Viewer ON', false, 150),
]


// SLIDERS / INPUT RANGES
// Mandatory id ... len
// Optional: unit ... bgColour
export const makeSliderState =
  (id, label, min, step, max, value, len, unit, displayFn, bgColour) =>
    ({
      type: ui.TYPE_SLIDER,
      id, label, min, step, max, value, len, unit, displayFn, bgColour
    })

export const makeIdSliderState = (id, value) =>
    makeSliderState(id, 'Id', 1, 1, 2, value, 1)

export const makeAngleSliderState = (id, value) =>
    makeSliderState(id, 'Angle', -270, 0.1, 270, value, 6, '°')

export const makeScaleSliderState = (id, value) =>
    makeSliderState(id, 'Scale', 0, 0.001, 0.999, value, 5)


export const getInitialSlidersState = () => [
  makeSliderState(ui.SLIDER_MAX_ITERATIONS, 'Max Iterations', 0, 1, 32, 16, 2),
  makeSliderState(ui.SLIDER_MIN_PX, 'Min Iteration Size', -3, 0.02, 9.9, 1, 5, 'px', map.MAP_EXP_2),
  makeSliderState(ui.SLIDER_MAX_COUNT, 'Max Count', 0, 0.1, 19.9, 16, 6, '', map.MAP_EXP_2_ROUND),
  makeSliderState(ui.SLIDER_MAX_CALC_TIME_US, 'Max Calc Time', 0, 0.1, 19.9, 14.2, 6, 'μs', map.MAP_EXP_2_ROUND),
  makeSliderState(ui.SLIDER_MAX_DRAW_TIME_US, 'Max Draw Time', 0, 0.1, 19.9, 15.4, 6, 'μs', map.MAP_EXP_2_ROUND),

  makeSliderState(ui.SLIDER_ANIMATION_RATE, 'Animation Rate', 0, 1, 9, 4, 2, 'Hz', map.MAP_FRAME_RATES),
  makeSliderState(ui.SLIDER_CANVAS_Y, 'Height', 60, 6, 1200, initialCanvasHeight, 4, 'px'),

  makeSliderState(ui.SLIDER_START_X, 'X', -990, 1, 990, 0, 4, 'px'),
  makeSliderState(ui.SLIDER_START_Y, 'Y', -990, 1, 990, 0, 4, 'px'),
  makeSliderState(ui.SLIDER_SCALE_START, 'Size', 0, 1, 990, 80, 3, 'px'),
  makeAngleSliderState(ui.SLIDER_ANGLE_START, 8),
  makeSliderState(ui.SLIDER_RATIO_B2_B1, 'b2 / b1', 0, 0.01, 1, 1, 4),

  makeIdSliderState(ui.SLIDER_ID_1_1, 2),
  makeScaleSliderState(ui.SLIDER_SCALE_1_1, 0.9),
  makeAngleSliderState(ui.SLIDER_ANGLE_1_1, 15),

  makeIdSliderState(ui.SLIDER_ID_1_2, 1),
  makeScaleSliderState(ui.SLIDER_SCALE_1_2, 0.40),
  makeAngleSliderState(ui.SLIDER_ANGLE_1_2, -65),

  makeIdSliderState(ui.SLIDER_ID_2_1, 1),
  makeScaleSliderState(ui.SLIDER_SCALE_2_1, 0.8),
  makeAngleSliderState(ui.SLIDER_ANGLE_2_1, -23),

  makeIdSliderState(ui.SLIDER_ID_2_2, 2),
  makeScaleSliderState(ui.SLIDER_SCALE_2_2, 0.5),
  makeAngleSliderState(ui.SLIDER_ANGLE_2_2, 73),
]
