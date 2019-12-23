// Maths
const degreesToRadians = Math.PI / 180

// Parameters to move to state
const colour1 = '#9B0'
const thicknessFactor1 = 1.5
const proportion1 = 0.4
// colour2 currently is a gradient from red to blue
const thicknessFactor2 = 1.2


const drawFractal = (objStore, getReduxState) => {
  const ctx = objStore.canvas.ctx
  const items = objStore.fractal.current

  // General setup
  const yTransform = objStore.canvas.elt.height

  // Iterate over items to draw
  const len = items.length
  const rLen = (len <= 1) ? 1 : 1 / (len - 1)
  for (let i=0; i<len; i++) {
    // Calculate coords with 0, 0 in bottom left
    const item = items[i]
    const x = item.vector[0]
    const y = item.vector[1]
    const radius = item.scale
    const angleRadians = item.angleDeg * degreesToRadians
    const xd = radius * Math.sin(angleRadians)
    const yd = radius * Math.cos(angleRadians)
    // Plot coords, transforming to have 0, 0 in top left
    // Stroke 2 (behind)
    const colFract = 255 * rLen * i
    ctx.strokeStyle = `rgb(${255 - colFract}, 0, ${colFract})`
    ctx.lineWidth = (thicknessFactor2 * radius) ** 0.5
    ctx.beginPath();
    ctx.moveTo(x, yTransform - y);
    ctx.lineTo(x + xd, yTransform - (y + yd));
    ctx.stroke()
    // Stroke 1 (in front)
    ctx.strokeStyle = colour1
    ctx.lineWidth = (thicknessFactor1 * radius) ** 0.5
    ctx.beginPath();
    ctx.moveTo(x, yTransform - y);
    ctx.lineTo(x + proportion1 * xd, yTransform - (y + proportion1 * yd));
    ctx.stroke()
  }
}

export default drawFractal
