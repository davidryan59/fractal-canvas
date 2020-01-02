import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import { sin, cos, degreesToRadians, loopsBetweenTimingChecks, drawWarnRatio, defaultHullDrawing } from '../constants/general'
import iterateFractalFully from './iterateFractalFully'


const drawFractal = (objStore, getReduxState) => {
  // Get from stores
  const ctx = objStore.canvas.ctx
  const reduxState = getReduxState()
  const minScalePx = getSliderDisplayValue(reduxState, ui.SLIDER_MIN_PX)
  const maxDrawTimeMs = 0.001 * getSliderDisplayValue(reduxState, ui.SLIDER_MAX_DRAW_TIME_US)

  // Recalculate fractal if necessary
  // (If fractal settings change then .current will be emptied)
  if (!objStore.fractal.current) iterateFractalFully(objStore, getReduxState)
  const items = objStore.fractal.current

  // General setup
  objStore.stats.timeDrawFractalStart = performance.now()
  const yTransform = objStore.canvas.elt.height   // Used to convert coords from top left to bottom left of canvas
  ctx.lineCap = 'round'
  let brightness = 1
  // Create function to range 0..1 to range 0..255 * brightness
  const sc255 = numberBetween0And1 => 255 * brightness * numberBetween0And1

  // Iterate over items to draw
  const len = items.length
  const rLen = (len <= 1) ? 1 : 1 / (len - 1)
  for (let i=0; i<len; i++) {

    // Periodically check there is still time left
    if (i % loopsBetweenTimingChecks === 0) {
      const drawRatio = (performance.now() - objStore.stats.timeDrawFractalStart) / maxDrawTimeMs
      if (1 < drawRatio) {
        // Simply stop drawing...
        // ideally would do something quick to draw earlier iterations...
        break
      } else if (drawWarnRatio < drawRatio) {
        // Fade fractal brightness out as drawing starts to approach its limit time
        brightness = (1 - drawRatio) / (1 - drawWarnRatio)
      }
    }

    // Draw the item
    const item = items[i]
    // First get id...
    const id = item.id
    // ...vector...
    const x = item.vector[0]
    const y = item.vector[1]
    // ... and transform
    const scale = item.scale
    const angleRadians = item.angleDeg * degreesToRadians
    const rFactor = (item.reflect) ? -1 : 1

    // Going to draw the convex hull from the fractal rule
    // Variables for colouring
    const posFract = rLen * i
    const sizeFract = Math.max(0, Math.min(1, 0.5 + Math.log10(scale/minScalePx)))
    const idFract = (id < 1.5) ? 1 : -1
    // Different colouring rules for 'branch' and 'leaf'
    const branchR = 1 - posFract
    const branchG = 0.5 * (1 - idFract)
    const branchB = posFract
    const leafR = sizeFract
    const leafG = (1 - 0.25 * sizeFract) * (1 - 0.5 * posFract - 0.5 * idFract)
    const leafB = 0.5 * posFract + 0.5 * idFract
    // Place correct colour in the canvas context
    ctx.fillStyle = (id === 0 || id === 3)
      ? `rgb(${sc255(branchR)}, ${sc255(branchG)}, ${sc255(branchB)})`
      : `rgb(${sc255(leafR)}, ${sc255(leafG)}, ${sc255(leafB)})`

    // Trace the convex hull for this fractal
    ctx.beginPath();
    const hull = objStore.fractal.rules[id].hull || defaultHullDrawing
    for (let j=0; j<hull.length; j++) {
      const hullPoint = hull[j]
      const u = hullPoint[0]
      const v = hullPoint[1]
      const newX = x + scale * (u * rFactor *  cos(angleRadians) + v * sin(angleRadians))
      const newY = y + scale * (u * rFactor * -sin(angleRadians) + v * cos(angleRadians))
      ctx.lineTo(newX, yTransform - newY);
    }
    ctx.fill()
  }
  objStore.stats.timeDrawFractalEnd = performance.now()
}

export default drawFractal
