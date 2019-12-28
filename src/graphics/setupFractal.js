import * as ui from '../constants/uiNames'
import { buttonActive } from '../getters/button'
import { getSliderDisplayValue } from '../getters/slider'

const setupFractal = (objStore, getReduxState) => {
  console.log("Refreshing fractal setup")
  // Get relevant parameters from reduxState
  const reduxState = getReduxState()
  const start_x = getSliderDisplayValue(reduxState, ui.SLIDER_START_X)
  const start_y = getSliderDisplayValue(reduxState, ui.SLIDER_START_Y)
  const scale_start = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_START)
  const angle_start = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_START)
  const ratio_b2_b1 = getSliderDisplayValue(reduxState, ui.SLIDER_RATIO_B2_B1)
  const reflect_start = buttonActive(reduxState, ui.TOGGLE_REFLECT_START)

  const id_1_1 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_1_1)
  const scale_1_1 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_1_1)
  const angle_1_1 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_1_1)
  const reflect_1_1 = buttonActive(reduxState, ui.TOGGLE_REFLECT_1_1)
  const id_1_2 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_1_2)
  const scale_1_2 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_1_2)
  const angle_1_2 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_1_2)
  const reflect_1_2 = buttonActive(reduxState, ui.TOGGLE_REFLECT_1_2)

  const id_2_1 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_2_1)
  const scale_2_1 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_2_1)
  const angle_2_1 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_2_1)
  const reflect_2_1 = buttonActive(reduxState, ui.TOGGLE_REFLECT_2_1)
  const id_2_2 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_2_2)
  const scale_2_2 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_2_2)
  const angle_2_2 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_2_2)
  const reflect_2_2 = buttonActive(reduxState, ui.TOGGLE_REFLECT_2_2)

  // Setup fractal area of objStore
  objStore.fractal = {}
  objStore.fractal.start = {
    id: 1,
    vector: [Math.floor(0.5 * objStore.canvas.elt.width) + start_x, 20 + start_y],
    scale: scale_start,       // Will match to canvas
    angleDeg: angle_start,    // Should be pointing vertically up
    reflect: reflect_start,
  }
  objStore.fractal.rules = [
    {
      id: 0,
      name: 'trunk',
      children: [
        {
          id: 0,
          vector: [0, 0],
          scale: 1,
          angleDeg: 0,
          stopIterating: true,
        }
      ]
    },
    {
      id: 1,
      name: 'branch 1',
      children: [
        {
          id: id_1_1,
          vector: [0, 1],
          scale: scale_1_1,
          angleDeg: angle_1_1,
          reflect: reflect_1_1,
        },
        {
          id: id_1_2,
          vector: [0, 1],
          scale: scale_1_2,
          angleDeg: angle_1_2,
          reflect: reflect_1_2,
        },
        {
          id: 0,
          vector: [0, 0],
          scale: 1,
          angleDeg: 0
        },
      ]
    },
    {
      id: 2,
      name: 'branch 2',
      children: [
        {
          id: id_2_1,
          vector: [0, ratio_b2_b1],
          scale: scale_2_1,
          angleDeg: angle_2_1,
          reflect: reflect_2_1,
        },
        {
          id: id_2_2,
          vector: [0, ratio_b2_b1],
          scale: scale_2_2,
          angleDeg: angle_2_2,
          reflect: reflect_2_2,
        },
        {
          id: 0,
          vector: [0, 0],
          scale: ratio_b2_b1,
          angleDeg: 0,
          weight: (ratio_b2_b1 > 0) ? 1 / ratio_b2_b1 : 0
        },
      ]
    },
  ]
}

export default setupFractal
