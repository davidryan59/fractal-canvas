import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import { hullRoundingAccuracy, hullCalcReps } from '../constants/general'
import iterateConvexHullOnce from './iterateConvexHullOnce'
import iterateFractalOnce from './iterateFractalOnce'


const iterateFractalFully = (objStore, getReduxState) => {
  console.log("Calculating all iterations of fractal")
  const reduxState = getReduxState()
  objStore.fractal.current = [objStore.fractal.start]
  objStore.stats.sizeAll = 1

  // Recalculate the convex hull for each fractal rule
  objStore.stats.timeHullCalcStart = performance.now()
  for (let i=0; i<hullCalcReps; i++) iterateConvexHullOnce(objStore, getReduxState, hullRoundingAccuracy)
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
