import * as ui from '../general/uiNames'
import { buttonActive } from '../redux/getters/button'
import { getSliderDisplayValue } from '../redux/getters/slider'
import { verbosity } from '../_params'

// Control shape of corners
const sqrt_3_400 = 0.1 * (3/4) ** 0.5  // 0.08660...

const setupFractal = (objStore, getReduxState) => {
  if (verbosity) console.log("Refreshing fractal setup")
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
    vector: [start_x, start_y],
    scale: scale_start,       // Will match to canvas
    angleDeg: angle_start,    // Should be pointing vertically up
    reflect: reflect_start,
  }
  objStore.fractal.rules = [
    {
      id: 0,
      name: 'trunk 1',
      hull: [
        [-0.1, 0],
        [-0.05, -sqrt_3_400],
        [0.05, -sqrt_3_400],
        [0.1, 0],
        [0.1, 1],
        [0.05, 1 + sqrt_3_400],
        [-0.05, 1 + sqrt_3_400],
        [-0.1, 1],
      ],
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
          id: 3,
          vector: [0, 0],
          scale: 1,
          angleDeg: 0,
        },
      ]
    },
    {
      id: 3,
      name: 'trunk 2',
      hull: [
        [-0.1, 0],
        [-0.05, -sqrt_3_400],
        [0.05, -sqrt_3_400],
        [0.1, 0],
        [0.1, ratio_b2_b1],
        [0.05, ratio_b2_b1 + sqrt_3_400],
        [-0.05, ratio_b2_b1 + sqrt_3_400],
        [-0.1, ratio_b2_b1],
      ],
    },
  ]
}

export default setupFractal
