import setupFractal from './setupFractal'
import drawFractal from './drawFractal'
import drawFrameCounter from './drawFrameCounter'

const drawCanvas = (objStore, getReduxState) => {
  setupFractal(objStore, getReduxState)
  drawFractal(objStore, getReduxState)
  drawFrameCounter(objStore, getReduxState)
}

export default drawCanvas
