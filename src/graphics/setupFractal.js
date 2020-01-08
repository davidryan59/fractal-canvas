import * as ui from '../general/uiNames'
import { buttonActive } from '../redux/getters/button'
import { getSliderDisplayValue } from '../redux/getters/slider'
import { verbosity } from '../_params'

// Control shape of corners
const sqrtOf3Over400 = 0.1 * (3 / 4) ** 0.5 // 0.08660...

const setupFractal = (objStore, getReduxState) => {
  if (verbosity) console.log('Refreshing fractal setup')
  // Get relevant parameters from reduxState
  const reduxState = getReduxState()
  const startX = getSliderDisplayValue(reduxState, ui.SLIDER_START_X)
  const startY = getSliderDisplayValue(reduxState, ui.SLIDER_START_Y)
  const scaleStart = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_START)
  const angleStart = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_START)
  const ratioB2B1 = getSliderDisplayValue(reduxState, ui.SLIDER_RATIO_B2_B1)
  const reflectStart = buttonActive(reduxState, ui.TOGGLE_REFLECT_START)

  const idB1C1 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_1_1)
  const scaleB1C1 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_1_1)
  const angleB1C1 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_1_1)
  const reflectB1C1 = buttonActive(reduxState, ui.TOGGLE_REFLECT_1_1)
  const idB1C2 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_1_2)
  const scaleB1C2 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_1_2)
  const angleB1C2 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_1_2)
  const reflectB1C2 = buttonActive(reduxState, ui.TOGGLE_REFLECT_1_2)

  const idB2C1 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_2_1)
  const scaleB2C1 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_2_1)
  const angleB2C1 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_2_1)
  const reflectB2C1 = buttonActive(reduxState, ui.TOGGLE_REFLECT_2_1)
  const idB2C2 = getSliderDisplayValue(reduxState, ui.SLIDER_ID_2_2)
  const scaleB2C2 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_2_2)
  const angleB2C2 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_2_2)
  const reflectB2C2 = buttonActive(reduxState, ui.TOGGLE_REFLECT_2_2)

  // Setup fractal area of objStore
  objStore.fractal = {}
  objStore.fractal.start = {
    id: 1,
    vector: [startX, startY],
    scale: scaleStart, // Will match to canvas
    angleDeg: angleStart, // Should be pointing vertically up
    reflect: reflectStart
  }
  objStore.fractal.rules = [
    {
      id: 0,
      name: 'trunk 1',
      hull: [
        [-0.1, 0],
        [-0.05, -sqrtOf3Over400],
        [0.05, -sqrtOf3Over400],
        [0.1, 0],
        [0.1, 1],
        [0.05, 1 + sqrtOf3Over400],
        [-0.05, 1 + sqrtOf3Over400],
        [-0.1, 1]
      ]
    },
    {
      id: 1,
      name: 'branch 1',
      children: [
        {
          id: idB1C1,
          vector: [0, 1],
          scale: scaleB1C1,
          angleDeg: angleB1C1,
          reflect: reflectB1C1
        },
        {
          id: idB1C2,
          vector: [0, 1],
          scale: scaleB1C2,
          angleDeg: angleB1C2,
          reflect: reflectB1C2
        },
        {
          id: 0,
          vector: [0, 0],
          scale: 1,
          angleDeg: 0
        }
      ]
    },
    {
      id: 2,
      name: 'branch 2',
      children: [
        {
          id: idB2C1,
          vector: [0, ratioB2B1],
          scale: scaleB2C1,
          angleDeg: angleB2C1,
          reflect: reflectB2C1
        },
        {
          id: idB2C2,
          vector: [0, ratioB2B1],
          scale: scaleB2C2,
          angleDeg: angleB2C2,
          reflect: reflectB2C2
        },
        {
          id: 3,
          vector: [0, 0],
          scale: 1,
          angleDeg: 0
        }
      ]
    },
    {
      id: 3,
      name: 'trunk 2',
      hull: [
        [-0.1, 0],
        [-0.05, -sqrtOf3Over400],
        [0.05, -sqrtOf3Over400],
        [0.1, 0],
        [0.1, ratioB2B1],
        [0.05, ratioB2B1 + sqrtOf3Over400],
        [-0.05, ratioB2B1 + sqrtOf3Over400],
        [-0.1, ratioB2B1]
      ]
    }
  ]
}

export default setupFractal
