import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import iterateFractalOnce from './iterateFractalOnce'

const iterateFractalFully = (objStore, getReduxState) => {
  console.log("Calculating all iterations of fractal")
  const reduxState = getReduxState()
  const maxIterations = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_ITERATIONS)
  objStore.fractal.current = [objStore.fractal.start]
  for (let i=0; i<maxIterations; i++) iterateFractalOnce(objStore, getReduxState)
}

export default iterateFractalFully
