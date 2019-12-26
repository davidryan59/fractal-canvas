import clearCanvas from './clearCanvas'
import drawFractal from './drawFractal'
import drawStats from './drawStats'

const drawCanvas = (objStore, getReduxState) => {
  objStore.stats.framesDrawn++
  clearCanvas(objStore, getReduxState)
  drawFractal(objStore, getReduxState)
  drawStats(objStore, getReduxState)
}

export default drawCanvas
