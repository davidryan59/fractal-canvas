const setupCanvas = (objStore, getReduxState) => {
  const canvasElt = document.getElementById('main-canvas')
  const ctx = canvasElt.getContext('2d')
  objStore.canvas = {}
  objStore.canvas.elt = canvasElt
  objStore.canvas.ctx = ctx
}

export default setupCanvas
