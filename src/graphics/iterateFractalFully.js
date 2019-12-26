import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import iterateFractalOnce from './iterateFractalOnce'

const iterateFractalFully = (objStore, getReduxState) => {
  console.log("Calculating all iterations of fractal")
  objStore.stats.timeIterationStart = performance.now()
  const reduxState = getReduxState()
  const maxIterations = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_ITERATIONS)
  objStore.fractal.current = [objStore.fractal.start]
  objStore.stats.sizeAll = 1
  for (let i=0; i<maxIterations; i++) iterateFractalOnce(objStore, getReduxState)
  objStore.stats.sizeCurrent = objStore.fractal.current.length
  objStore.stats.timeIterationEnd = performance.now()
}

export default iterateFractalFully
