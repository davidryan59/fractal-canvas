import clearCanvas from './clearCanvas'
import drawFractal from './drawFractal'
import drawStats from './drawStats'

const drawCanvas = (objStore, getReduxState) => {
  objStore.stats.framesDrawn++
  objStore.stats.timeDrawCanvasStart = performance.now()
  clearCanvas(objStore, getReduxState)
  drawFractal(objStore, getReduxState)
  objStore.stats.timeDrawCanvasEnd = performance.now()
  drawStats(objStore, getReduxState)
}

export default drawCanvas
