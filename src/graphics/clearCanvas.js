const clearCanvas = (objStore, reduxStore) => {
  const ctx = objStore.canvas.ctx
  const elt = objStore.canvas.elt
  ctx.clearRect(0, 0, elt.width, elt.height)
}

export default clearCanvas
