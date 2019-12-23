import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import iterateFractal from '../graphics/iterateFractal'

const setupFractal = (objStore, getReduxState) => {
  // Get relevant parameters from reduxState
  const reduxState = getReduxState()
  const maxIterations = 1 * getSliderDisplayValue(reduxState, ui.SLIDER_MAX_ITERATIONS)
  const angle1 = 1 * getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_1)
  const angle2 = 1 * getSliderDisplayValue(reduxState, ui.SLIDER_ANGLE_2)

  // Setup fractal area of objStore
  objStore.fractal = {}
  objStore.fractal.start = {
    id: 1,
    vector: [Math.floor(0.5 * objStore.canvas.elt.width), 20],
    scale: 200,         // Will match to canvas
    angleDeg: 5         // Should be pointing vertically up
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
          vector: [0, 0.5],
          scale: 0.8,
          angleDeg: angle1
        },
        {
          id: 1,
          vector: [0, 0.5],
          scale: 0.7,
          angleDeg: angle2
        },
        {
          id: 0,
          vector: [0, 0],
          scale: 0.5,
          angleDeg: 0
        }
      ]
    }
  ]
  objStore.fractal.iteration = 0
  objStore.fractal.current = [objStore.fractal.start]

  for (let i=0; i<maxIterations; i++) iterateFractal(objStore, getReduxState)
}

export default setupFractal
