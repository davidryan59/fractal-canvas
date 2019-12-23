import clearCanvas from './clearCanvas'
import drawFractal from './drawFractal'
import drawFrameCounter from './drawFrameCounter'

const drawCanvas = (objStore, getReduxState) => {
  clearCanvas(objStore, getReduxState)
  drawFractal(objStore, getReduxState)
  drawFrameCounter(objStore, getReduxState)
}

export default drawCanvas
