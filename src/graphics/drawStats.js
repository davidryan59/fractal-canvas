import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import { statUpdatePeriodMs } from '../constants/general'


const updateStatCache = (objStore, getReduxState) => {
  const reduxState = getReduxState()
  const st = objStore.stats
  const sC = objStore.statCache
  sC.maxCount = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_COUNT)
  sC.maxCalcTimeUs = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_CALC_TIME_US)
  sC.maxDrawTimeUs = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_DRAW_TIME_US)
  sC.animationRateHz = getSliderDisplayValue(reduxState, ui.SLIDER_ANIMATION_RATE) || 1
  sC.maxAnimationTimeUs = Math.round(1000000 / sC.animationRateHz)
  sC.framesDrawn = st.framesDrawn
  sC.sizeCurrent = st.sizeCurrent
  sC.sizeAll = st.sizeAll
  sC.iterationsUsed = st.currentIteration
  sC.maxIterations = st.maxIterations
  sC.hullTimeUs = Math.round(1000 * (st.timeHullCalcEnd - st.timeHullCalcStart))
  sC.calcTimeUs = Math.round(1000 * (st.timeIterationEnd - st.timeIterationStart))
  sC.drawTimeUs = Math.round(1000 * (st.timeDrawFractalEnd - st.timeDrawFractalStart))
  sC.spareTimeUs = sC.maxAnimationTimeUs - sC.maxCalcTimeUs - sC.maxDrawTimeUs
  sC.lastUpdateTimeMs = performance.now()
}

const drawStats = (objStore, getReduxState) => {
  // Recalculate statCache several times a second
  const sC = objStore.statCache
  if (!sC.lastUpdateTimeMs || statUpdatePeriodMs < performance.now() - sC.lastUpdateTimeMs)
    updateStatCache(objStore, getReduxState)

  // Setup colours
  const colGood = '#6F6'
  const colOK = '#DD6'
  const colBad = '#F66'

  // General setup
  const ctx = objStore.canvas.ctx
  const elt = objStore.canvas.elt
  ctx.font = '12px monospace'
  const edge = 20
  const mult = 20
  let start, count

  // Items on left
  start = 70
  count = 0
  ctx.textAlign = 'left'
  // Size of all iterations
  ctx.fillStyle = (sC.sizeAll < sC.maxCount) ? colGood : colOK
  ctx.fillText(`count all: ${sC.sizeAll}`, edge, elt.height - start + mult * count++)
  // Size of final iteration
  ctx.fillStyle = (sC.sizeCurrent < sC.maxCount) ? colGood : colBad
  ctx.fillText(`count last: ${sC.sizeCurrent}`, edge, elt.height - start + mult * count++)
  // Frame counter
  ctx.fillStyle = colGood
  ctx.fillText(`count frames: ${sC.framesDrawn}`, edge, elt.height - start + mult * count++)

  // Items on right
  start = 130
  count = 0
  ctx.textAlign = 'right'
  // Iteration count
  ctx.fillStyle = (sC.iterationsUsed < sC.maxIterations) ? colGood : colOK
  ctx.fillText(`iterations used: ${sC.iterationsUsed}`, elt.width - edge, elt.height - start + mult * count++)
  // Iteration timer
  ctx.fillStyle = colGood
  ctx.fillText(`max time: ${sC.maxAnimationTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Convex hull calc timer
  ctx.fillStyle = colOK
  ctx.fillText(`hull calc time: ${sC.hullTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Iteration calc timer
  ctx.fillStyle = (sC.calcTimeUs < sC.maxCalcTimeUs) ? colGood : colBad
  ctx.fillText(`calc, max calc time: ${sC.calcTimeUs}, ${sC.maxCalcTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Frame timer
  ctx.fillStyle = (sC.drawTimeUs < sC.maxDrawTimeUs) ? colGood : colBad
  ctx.fillText(`draw, max draw time: ${sC.drawTimeUs}, ${sC.maxDrawTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
  // Spare time
  ctx.fillStyle = (0 < sC.spareTimeUs) ? colGood : colBad
  ctx.fillText(`spare time: ${sC.spareTimeUs} μs`, elt.width - edge, elt.height - start + mult * count++)
}

export default drawStats
