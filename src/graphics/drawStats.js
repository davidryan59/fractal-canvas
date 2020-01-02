import * as ui from '../general/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import { statUpdatePeriodMs } from '../_params'


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

  // General setup
  const ctx = objStore.canvas.ctx
  const elt = objStore.canvas.elt
  ctx.font = '12px monospace'
  const edge = 20
  const mult = 20
  let start, count

  // Helper functions to draw text lines
  const drawTextLine = (text, hPos, condGood, condBad) => {
    ctx.fillStyle = (condGood) ? '#6F6' : (condBad) ? '#F66' : '#DD6'
    ctx.fillText(text, hPos, elt.height - start + mult * count++)
  }
  const drawTextLineL = (text, condGood, condBad) => drawTextLine(text, edge, condGood, condBad)
  const drawTextLineR = (text, condGood, condBad) => drawTextLine(text, elt.width - edge, condGood, condBad)

  // Items on left
  start = 70
  count = 0
  ctx.textAlign = 'left'
  drawTextLineL(`count all: ${sC.sizeAll}`, sC.sizeAll < sC.maxCount)
  drawTextLineL(`count last: ${sC.sizeCurrent}`, sC.sizeCurrent < sC.maxCount, true)
  drawTextLineL(`count frames: ${sC.framesDrawn}`, true)

  // Items on right
  start = 130
  count = 0
  ctx.textAlign = 'right'
  drawTextLineR(`iterations used: ${sC.iterationsUsed}`, sC.iterationsUsed < sC.maxIterations)
  drawTextLineR(`max time: ${sC.maxAnimationTimeUs} μs`, true)
  drawTextLineR(`hull calc time: ${sC.hullTimeUs} μs`)
  drawTextLineR(`calc, max calc time: ${sC.calcTimeUs}, ${sC.maxCalcTimeUs} μs`, sC.calcTimeUs < sC.maxCalcTimeUs, true)
  drawTextLineR(`draw, max draw time: ${sC.drawTimeUs}, ${sC.maxDrawTimeUs} μs`, sC.drawTimeUs < sC.maxDrawTimeUs, true)
  drawTextLineR(`spare time: ${sC.spareTimeUs} μs`, 0 < sC.spareTimeUs, true)
}

export default drawStats
