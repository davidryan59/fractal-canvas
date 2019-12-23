import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'

const setupFractal = (objStore, getReduxState) => {
  console.log("Refreshing fractal setup")
  // Get relevant parameters from reduxState
  const reduxState = getReduxState()
  const scale_start = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_START)
  const angle_start = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_START)
  const scale_1_1 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_1_1)
  const angle_1_1 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_1_1)
  const scale_1_2 = getSliderDisplayValue(reduxState, ui.SLIDER_SCALE_1_2)
  const angle_1_2 = getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_1_2)

  // Setup fractal area of objStore
  objStore.fractal = {}
  objStore.fractal.start = {
    id: 1,
    vector: [Math.floor(0.5 * objStore.canvas.elt.width), 20],
    scale: scale_start,         // Will match to canvas
    angleDeg: angle_start         // Should be pointing vertically up
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
          angleDeg: 0
        }
      ]
    },
    {
      id: 1,
      name: 'tree',
      children: [
        {
          id: 1,
          vector: [0, 1],
          scale: scale_1_1,
          angleDeg: angle_1_1
        },
        {
          id: 1,
          vector: [0, 1],
          scale: scale_1_2,
          angleDeg: angle_1_2
        },
        {
          id: 0,
          vector: [0, 0],
          scale: 1,
          angleDeg: 0
        }
      ]
    }
  ]
}

export default setupFractal
