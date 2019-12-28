import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import { sin, cos, degreesToRadians, loopsBetweenTimingChecks, drawWarnRatio } from '../constants/general'
import iterateFractalFully from './iterateFractalFully'


const drawFractal = (objStore, getReduxState) => {
  // Get from stores
  const ctx = objStore.canvas.ctx
  const reduxState = getReduxState()
  const minScalePx = getSliderDisplayValue(reduxState, ui.SLIDER_MIN_PX)
  const lineWidthPx = getSliderDisplayValue(reduxState, ui.SLIDER_LINE_WIDTH)
  const lineWidthExp = getSliderDisplayValue(reduxState, ui.SLIDER_LINE_EXP)
  const maxDrawTimeMs = 0.001 * getSliderDisplayValue(reduxState, ui.SLIDER_MAX_DRAW_TIME_US)

  // Recalculate fractal if necessary
  // (If fractal settings change then .current will be emptied)
  if (!objStore.fractal.current) iterateFractalFully(objStore, getReduxState)
  const items = objStore.fractal.current

  // General setup
  objStore.stats.timeDrawFractalStart = performance.now()
  const yTransform = objStore.canvas.elt.height
  ctx.lineCap = 'round'
  let brightness = 1
  // Iterate over items to draw
  const len = items.length
  const rLen = (len <= 1) ? 1 : 1 / (len - 1)
  for (let i=0; i<len; i++) {

    // Periodically check there is still time left
    if (i % loopsBetweenTimingChecks === 0) {
      const drawRatio = (performance.now() - objStore.stats.timeDrawFractalStart) / maxDrawTimeMs
      if (1 < drawRatio) {
        // Simply stop drawing...
        // ideally would draw earlier iterations quickly
        break
      } else if (drawWarnRatio < drawRatio) {
        // Fade fractal brightness out as drawing starts to break
        brightness = (1 - drawRatio) / (1 - drawWarnRatio)
      }
    }

    // Going to draw this item
    const item = items[i]
    const id = item.id
    // Calculate coords with 0, 0 in bottom left
    const x = item.vector[0]
    const y = item.vector[1]
    const scale = item.scale
    const weight = item.weight || 1
    const angleRadians = item.angleDeg * degreesToRadians
    const xd = scale * sin(angleRadians)
    const yd = scale * cos(angleRadians)

    // Plot coords, transforming to have 0, 0 in top left
    const posFract = rLen * i
    const sizeFract = Math.max(0, Math.min(1, 0.5 + Math.log10(scale/minScalePx)))
    ctx.strokeStyle = (id === 0)
      ? `rgb(${255 * brightness * (1 - posFract)}, 0, ${255 * brightness * posFract})`    // Branch
      : `rgb(${255 * brightness * sizeFract}, ${255 * brightness * (1 - 0.25 * sizeFract)}, 0)`   // Leaf
    ctx.lineWidth = lineWidthPx * (0.01 * scale * weight) ** -lineWidthExp
    ctx.beginPath();
    ctx.moveTo(x, yTransform - y);
    ctx.lineTo(x + xd, yTransform - (y + yd));
    ctx.stroke()

  }
  objStore.stats.timeDrawFractalEnd = performance.now()
}

export default drawFractal
