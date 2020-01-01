import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'

// let frameCount = 0
const drawStats = (objStore, getReduxState) => {
  // Get from stores
  const ctx = objStore.canvas.ctx
  const elt = objStore.canvas.elt
  const reduxState = getReduxState()
  const maxCount = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_COUNT)
  const maxCalcTimeUs = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_CALC_TIME_US)
  const maxDrawTimeUs = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_DRAW_TIME_US)
  const animationRateHz = getSliderDisplayValue(reduxState, ui.SLIDER_ANIMATION_RATE) || 1
  const maxAnimationTimeUs = Math.round(1000000 / animationRateHz)
  const framesDrawn = objStore.stats.framesDrawn
  const sizeCurrent = objStore.stats.sizeCurrent
  const sizeAll = objStore.stats.sizeAll
  const iterationsUsed = objStore.stats.currentIteration
  const maxIterations = objStore.stats.maxIterations
  const hullTimeUs = Math.round(1000 * (objStore.stats.timeHullCalcEnd - objStore.stats.timeHullCalcStart))
  const calcTimeUs = Math.round(1000 * (objStore.stats.timeIterationEnd - objStore.stats.timeIterationStart))
  const drawTimeUs = Math.round(1000 * (objStore.stats.timeDrawFractalEnd - objStore.stats.timeDrawFractalStart))
  const spareTimeUs = maxAnimationTimeUs - maxCalcTimeUs - maxDrawTimeUs

  const colGood = '#6F6'
  const colOK = '#DD6'
  const colBad = '#F66'

  // General setup
  ctx.font = '12px monospace'
  const edge = 20
  const mult = 20
  let start, count

  // Items on left
  start = 70
  count = 0
  ctx.textAlign = 'left'
  // Size of all iterations
  ctx.fillStyle = (sizeAll < maxCount) ? colGood : colOK
  ctx.fillText(`count all: ${sizeAll}`, edge, elt.height - start + mult * count++)
  // Size of final iteration
  ctx.fillStyle = (sizeCurrent < maxCount) ? colGood : colBad
  ctx.fillText(`count last: ${sizeCurrent}`, edge, elt.height - start + mult * count++)
  // Frame counter
  ctx.fillStyle = colGood
  ctx.fillText(`count frames: ${framesDrawn}`, edge, elt.height - start + mult * count++)

  // Items on right
  start = 130
  count = 0
  ctx.textAlign = 'right'
  // Iteration count
  ctx.fillStyle = (iterationsUsed < maxIterations) ? colGood : colOK
  ctx.fillText(`iterations used: ${iterationsUsed}`, elt.width - edge, elt.height - start + mult * count++)
  // Iteration timer
  ctx.fillStyle = colGood
  ctx.fillText(`max time: ${maxAnimationTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Convex hull calc timer
  ctx.fillStyle = colOK
  ctx.fillText(`hull calc time: ${hullTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Iteration calc timer
  ctx.fillStyle = (calcTimeUs < maxCalcTimeUs) ? colGood : colBad
  ctx.fillText(`calc, max calc time: ${calcTimeUs}, ${maxCalcTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Frame timer
  ctx.fillStyle = (drawTimeUs < maxDrawTimeUs) ? colGood : colBad
  ctx.fillText(`draw, max draw time: ${drawTimeUs}, ${maxDrawTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Spare time
  ctx.fillStyle = (0 < spareTimeUs) ? colGood : colBad
  ctx.fillText(`spare time: ${spareTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
}

export default drawStats
