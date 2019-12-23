let frameCount = 0
const drawFrameCounter = (objStore, reduxStore) => {
  const ctx = objStore.canvas.ctx
  ctx.fillStyle = '#DA7'
  ctx.font = '11px monospace'
  ctx.fillText(`frame = ${frameCount++}`, 10, objStore.canvas.elt.height - 10)
}

export default drawFrameCounter
