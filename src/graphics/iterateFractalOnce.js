import * as ui from '../general/uiNames'
import { getSliderDisplayValue } from '../redux/getters/slider'
import { sin, cos, degreesToRadians, loopsBetweenTimingChecks } from '../_params'

const iterateFractalOnce = (objStore, getReduxState) => {
  // Get from stores
  const reduxState = getReduxState()
  const minScalePx = getSliderDisplayValue(reduxState, ui.SLIDER_MIN_PX)
  const maxCalcTimeMs = 0.001 * getSliderDisplayValue(reduxState, ui.SLIDER_MAX_CALC_TIME_US)
  const maxCount = getSliderDisplayValue(reduxState, ui.SLIDER_MAX_COUNT)

  // Control iteration
  objStore.stats.currentIteration++
  let finishedIterating = (objStore.stats.maxIterations <= objStore.stats.currentIteration)
  let aChildGenerated = false

  // Calculate
  const items = objStore.fractal.current
  const rules = objStore.fractal.rules
  let result = []
  for (let i = 0; i < items.length; i++) {
    // Periodically check various maximum have not been exceeded
    if (i % loopsBetweenTimingChecks === 0) {
      const calcTimeExceeded = (maxCalcTimeMs < performance.now() - objStore.stats.timeIterationStart)
      const sizeExceeded = (maxCount < (items.length - i) + result.length)
      if (calcTimeExceeded || sizeExceeded) {
        // Break loop early. Add unprocessed items (from i onwards) back into result.
        finishedIterating = true
        result = result.concat(items.slice(i))
        break
      }
    }
    // Take ith item in array
    const item = items[i]
    const parentId = item.id
    const itemRules = rules[parentId]
    if (item.scale < minScalePx || !itemRules.children) {
      // Do not iterate item
      // 1) Item scale has gone below min scale
      // 2) Item has no children, so no iteration, and just draw the shape
      result.push(item)
    } else {
      // Iterate item
      for (let j = 0; j < itemRules.children.length; j++) {
        const childRule = itemRules.children[j]
        const newScale = item.scale * childRule.scale
        // Discard any items of zero scale
        // e.g. rule had zero scale
        if (newScale > 0) {
          // Setup newItem
          aChildGenerated = true
          const newItem = {}
          const branchAxisReflectFactor = (item.reflect) ? -1 : 1
          // Some simple calcs
          newItem.id = childRule.id
          newItem.scale = newScale
          newItem.reflect = item.reflect ^ childRule.reflect // XOR
          newItem.angleDeg = item.angleDeg + branchAxisReflectFactor * childRule.angleDeg
          // Vector slightly more complex
          const x1 = item.vector[0]
          const y1 = item.vector[1]
          const r = item.scale
          const a = item.angleDeg * degreesToRadians
          const u = childRule.vector[0]
          const v = childRule.vector[1]
          // Matrix is rotation (factor = 1) or reflection (factor = -1)
          const x2 = x1 + r * (u * branchAxisReflectFactor * cos(a) + v * sin(a))
          const y2 = y1 + r * (u * branchAxisReflectFactor * -sin(a) + v * cos(a))
          newItem.vector = [x2, y2]
          result.push(newItem)
        }
      }
    }
  }
  objStore.fractal.current = result
  objStore.stats.sizeAll += result.length
  finishedIterating = finishedIterating || !aChildGenerated
  return finishedIterating
}

export default iterateFractalOnce
