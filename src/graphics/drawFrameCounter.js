let frameCount = 0
const drawFrameCounter = (objStore, getReduxState) => {
  const ctx = objStore.canvas.ctx
  const elt = objStore.canvas.elt
  ctx.fillStyle = '#DA7'
  ctx.font = '11px monospace'
  ctx.fillText(
    `frame = ${frameCount++}`,
    10,
    elt.height - 10
  )
}

export default drawFrameCounter
