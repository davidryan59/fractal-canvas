import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'

// let frameCount = 0
const drawStats = (objStore, getReduxState) => {
  // Get from stores
  const ctx = objStore.canvas.ctx
  const elt = objStore.canvas.elt
  const reduxState = getReduxState()
  const maxCount = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_COUNT)
  const framesDrawn = objStore.stats.framesDrawn
  const sizeCurrent = objStore.stats.sizeCurrent
  const sizeAll = objStore.stats.sizeAll
  const iterationsUsed = objStore.stats.currentIteration
  const maxIterations = objStore.stats.maxIterations
  const calcTimeUs = Math.round(1000 * (objStore.stats.timeIterationEnd - objStore.stats.timeIterationStart))
  const drawTimeUs = Math.round(1000 * (objStore.stats.timeDrawFractalEnd - objStore.stats.timeDrawFractalStart))

  const colGood = '#6F6'
  const colOK = '#DD6'
  const colBad = '#F66'

  // Items on left
  ctx.font = '12px monospace'
  ctx.textAlign = 'left'
  // Size of all iterations
  ctx.fillStyle = (sizeAll < maxCount) ? colGood : colOK
  ctx.fillText(`count all: ${sizeAll}`, 10, elt.height - 70)
  // Size of final iteration
  ctx.fillStyle = (sizeCurrent < maxCount) ? colGood : colBad
  ctx.fillText(`count last: ${sizeCurrent}`, 10, elt.height - 40)
  // Frame counter
  ctx.fillStyle = colGood
  ctx.fillText(`count frames: ${framesDrawn}`, 10, elt.height - 10)

  // Items on right
  ctx.textAlign = 'right'
  // Iteration count
  ctx.fillStyle = (iterationsUsed < maxIterations) ? colGood : colOK
  ctx.fillText(`iterations used: ${iterationsUsed}`, elt.width - 10, elt.height - 70)
  // Iteration timer
  ctx.fillStyle = colGood
  ctx.fillText(`calc time: ${calcTimeUs} μs`, elt.width - 10, elt.height - 40)
  // Frame timer
  ctx.fillStyle = colGood
  ctx.fillText(`draw time: ${drawTimeUs} μs`, elt.width - 10, elt.height - 10)
}

export default drawStats
