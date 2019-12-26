import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'

const cos = Math.cos
const sin = Math.sin
const degreesToRadians = Math.PI / 180

const iterateFractalOnce = (objStore, getReduxState) => {
  // Get from stores
  const reduxState = getReduxState()
  const minScalePx = getSliderDisplayValue(reduxState, ui.SLIDER_MIN_PX)

  // Calculate
  const items = objStore.fractal.current
  const rules = objStore.fractal.rules
  const result = []
  for (let i=0; i<items.length; i++) {
    const item = items[i]
    const parentId = item.id
    const itemRules = rules[parentId]
    if (item.scale < minScalePx) {
      result.push(item)
    } else {
      for (let j=0; j<itemRules.children.length; j++) {
        const childRule = itemRules.children[j]
        const newScale = item.scale * childRule.scale
        // Discard any items of zero scale
        // e.g. rule had zero scale
        if (0 < newScale) {
          // Setup newItem
          const newItem = {}
          // Some simple calcs
          newItem.id = childRule.id
          newItem.scale = newScale
          newItem.angleDeg = item.angleDeg + childRule.angleDeg
          // Weight currently used to make lineWidth larger on certain children
          const newWeight = childRule.weight || item.weight
          if (newWeight) newItem.weight = newWeight
          // Vector slightly more complex
          const x1 = item.vector[0]
          const y1 = item.vector[1]
          const r = item.scale
          const a = item.angleDeg * degreesToRadians
          const u = childRule.vector[0]
          const v = childRule.vector[1]
          const x2 = x1 + r * (u * cos(a) + v * sin(a))
          const y2 = y1 + r * (- u * sin(a) + v * cos(a))
          newItem.vector = [x2, y2]
          result.push(newItem)
        }
      }
    }
  }
  objStore.fractal.current = result
  objStore.stats.sizeAll += result.length
}

export default iterateFractalOnce
