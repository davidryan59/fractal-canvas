import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import iterateFractalOnce from './iterateFractalOnce'

const iterateFractalFully = (objStore, getReduxState) => {
  console.log("Calculating all iterations of fractal")
  objStore.stats.timeIterationStart = performance.now()
  const reduxState = getReduxState()
  objStore.fractal.current = [objStore.fractal.start]
  objStore.stats.sizeAll = 1

  // Repeat iterating until finished
  objStore.stats.maxIterations = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_ITERATIONS)
  objStore.stats.currentIteration = 0
  let finishedIterating = (objStore.stats.maxIterations <= objStore.stats.currentIteration)
  while (!finishedIterating) finishedIterating = iterateFractalOnce(objStore, getReduxState)

  objStore.stats.sizeCurrent = objStore.fractal.current.length
  objStore.stats.timeIterationEnd = performance.now()
}

export default iterateFractalFully
