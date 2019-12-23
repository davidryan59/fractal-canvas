const cos = Math.cos
const sin = Math.sin
const degreesToRadians = Math.PI / 180

const iterateFractalOnce = (objStore, getReduxState) => {
  const items = objStore.fractal.current
  const rules = objStore.fractal.rules
  const result = []
  for (let i=0; i<items.length; i++) {
    const item = items[i]
    const parentId = item.id
    const itemRules = rules[parentId]
    for (let j=0; j<itemRules.children.length; j++) {
      const childRule = itemRules.children[j]
      const newItem = {}
      // 3 out of 4 calcs are straightforward
      newItem.id = childRule.id
      newItem.angleDeg = item.angleDeg + childRule.angleDeg
      newItem.scale = item.scale * childRule.scale
      // 1 out of 4 (vector) slightly more complex
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
  objStore.fractal.current = result
}

export default iterateFractalOnce
