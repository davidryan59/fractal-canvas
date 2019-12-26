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
  const calcTimeUs = Math.round(1000 * (objStore.stats.timeIterationEnd - objStore.stats.timeIterationStart))
  const drawTimeUs = Math.round(1000 * (objStore.stats.timeDrawFractalEnd - objStore.stats.timeDrawFractalStart))

  const colOK = '#6F6'
  const colBad = '#F66'

  // Items on left
  ctx.font = '12px monospace'
  ctx.textAlign = 'left'
  // Size of all iterations
  ctx.fillStyle = (sizeAll < maxCount) ? colOK : colBad
  ctx.fillText(`count all = ${sizeAll}`, 10, elt.height - 70)
  // Size of final iteration
  ctx.fillStyle = (sizeCurrent < maxCount) ? colOK : colBad
  ctx.fillText(`count last = ${sizeCurrent}`, 10, elt.height - 40)
  // Frame counter
  ctx.fillStyle = colOK
  ctx.fillText(`count frames = ${framesDrawn}`, 10, elt.height - 10)

  // Items on right
  ctx.textAlign = 'right'
  // Iteration timer
  ctx.fillStyle = colOK
  ctx.fillText(`calc time = ${calcTimeUs} μs`, elt.width - 10, elt.height - 40)
  // Frame timer
  ctx.fillStyle = colOK
  ctx.fillText(`draw time = ${drawTimeUs} μs`, elt.width - 10, elt.height - 10)
}

export default drawStats
