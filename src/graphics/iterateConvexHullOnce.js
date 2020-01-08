import { sin, cos, degreesToRadians, defaultHullIteration } from '../_params'
import convexHull from 'monotone-convex-hull-2d'

const iterateConvexHullOnce = (objStore, getReduxState, roundTo) => {
  const roundToRecip = 1 / roundTo
  const rules = objStore.fractal.rules
  const currentHulls = rules.map((rule, idx) => (rule.hull) ? rule.hull : defaultHullIteration)
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    const nextHull = []
    if (!rule.children) {
      // If no children, this rule does not iterate,
      // so leave rule.hull unchanged
    } else {
      for (let j = 0; j < rule.children.length; j++) {
        const child = rule.children[j]
        const hullToCopy = currentHulls[child.id]
        // Going to need child vector, scale, angle, reflection
        for (let k = 0; k < hullToCopy.length; k++) {
          const hullPoint = hullToCopy[k]
          const x1 = child.vector[0]
          const y1 = child.vector[1]
          const r = child.scale
          const a = child.angleDeg * degreesToRadians
          const u = hullPoint[0]
          const v = hullPoint[1]
          const rFactor = (child.reflect) ? -1 : 1
          const x2 = x1 + r * (u * rFactor * cos(a) + v * sin(a))
          const y2 = y1 + r * (u * rFactor * -sin(a) + v * cos(a))
          const x2Acc = roundTo * Math.round(x2 * roundToRecip)
          const y2Acc = roundTo * Math.round(y2 * roundToRecip)
          const newPoint = [x2Acc, y2Acc]
          nextHull.push(newPoint)
        }
      }
      const hullIndices = convexHull(nextHull)
      const nextHullCalc = hullIndices.map(idx => nextHull[idx])
      rule.hull = nextHullCalc
    }
  }
}

export default iterateConvexHullOnce
