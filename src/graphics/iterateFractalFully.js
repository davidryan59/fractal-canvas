import { verbosity } from '../_params'
import * as ui from '../general/uiNames'
import { getSliderDisplayValue } from '../redux/getters/slider'
import iterateConvexHullOnce from './iterateConvexHullOnce'
import iterateFractalOnce from './iterateFractalOnce'

const iterateFractalFully = (objStore, getReduxState) => {
  if (verbosity) console.log('Calculating all iterations of fractal')
  const reduxState = getReduxState()
  objStore.fractal.current = [objStore.fractal.start]
  objStore.stats.sizeAll = 1

  // Recalculate the convex hull for each fractal rule
  const hullCalcReps = getSliderDisplayValue(reduxState, ui.SLIDER_HULL_ITERATIONS)
  const hullRoundingAccuracy = getSliderDisplayValue(reduxState, ui.SLIDER_HULL_ROUNDING)
  const hullMaxCalcTimeMs = 0.001 * getSliderDisplayValue(reduxState, ui.SLIDER_HULL_MAX_CALC_TIME_US)
  objStore.stats.timeHullCalcStart = performance.now()
  objStore.stats.hullIterationsUsed = 0
  for (let i = 0; i < hullCalcReps; i++) {
    if (hullMaxCalcTimeMs < performance.now() - objStore.stats.timeHullCalcStart) break
    iterateConvexHullOnce(objStore, getReduxState, hullRoundingAccuracy)
    objStore.stats.hullIterationsUsed++
  }
  objStore.stats.timeHullCalcEnd = performance.now()

  // Iterate fractal repeatedly until finished
  objStore.stats.timeIterationStart = performance.now()
  objStore.stats.maxIterations = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_ITERATIONS)
  objStore.stats.currentIteration = 0
  let finishedIterating = (objStore.stats.maxIterations <= objStore.stats.currentIteration)
  while (!finishedIterating) finishedIterating = iterateFractalOnce(objStore, getReduxState)
  objStore.stats.timeIterationEnd = performance.now()

  objStore.stats.sizeCurrent = objStore.fractal.current.length
}

export default iterateFractalFully
