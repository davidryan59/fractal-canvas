import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'

import iterateFractalFully from './iterateFractalFully'

// Maths
const degreesToRadians = Math.PI / 180

const drawFractal = (objStore, getReduxState) => {
  // Get from stores
  const ctx = objStore.canvas.ctx
  const reduxState = getReduxState()
  const minScalePx = getSliderDisplayValue(reduxState, ui.SLIDER_MIN_PX)
  const lineWidthPx = getSliderDisplayValue(reduxState, ui.SLIDER_LINE_WIDTH)
  const lineWidthExp = getSliderDisplayValue(reduxState, ui.SLIDER_LINE_EXP)

  // Recalculate fractal if necessary
  // (If fractal settings change then .current will be emptied)
  if (!objStore.fractal.current) iterateFractalFully(objStore, getReduxState)
  const items = objStore.fractal.current

  // General setup
  const yTransform = objStore.canvas.elt.height
  ctx.lineCap = 'round'

  // Iterate over items to draw
  const len = items.length
  const rLen = (len <= 1) ? 1 : 1 / (len - 1)
  for (let i=0; i<len; i++) {
    // Calculate coords with 0, 0 in bottom left
    const item = items[i]
    const id = item.id
    const x = item.vector[0]
    const y = item.vector[1]
    const radius = item.scale
    const angleRadians = item.angleDeg * degreesToRadians
    const xd = radius * Math.sin(angleRadians)
    const yd = radius * Math.cos(angleRadians)

    // Plot coords, transforming to have 0, 0 in top left
    const posFract = rLen * i
    const sizeFract = Math.max(0, Math.min(1, 0.5 + Math.log10(radius/minScalePx)))
    ctx.strokeStyle = (id === 0)
      ? `rgb(${255 - 255 * posFract}, 0, ${255 * posFract})`    // Branch
      : `rgb(${255 * sizeFract}, ${255 - 64 * sizeFract}, 0)`   // Leaf
    ctx.lineWidth = lineWidthPx * (0.01 * radius) ** -lineWidthExp
    ctx.beginPath();
    ctx.moveTo(x, yTransform - y);
    ctx.lineTo(x + xd, yTransform - (y + yd));
    ctx.stroke()
  }
}

export default drawFractal
