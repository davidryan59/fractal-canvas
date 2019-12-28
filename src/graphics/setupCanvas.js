const setupCanvas = (objStore, getReduxState) => {
  // Get canvas element and context
  const canvasElt = document.getElementById('main-canvas')
  const ctx = canvasElt.getContext('2d')
  // Store references
  objStore.canvas = {}
  objStore.canvas.ctx = ctx
  objStore.canvas.elt = canvasElt
}

export default setupCanvas
