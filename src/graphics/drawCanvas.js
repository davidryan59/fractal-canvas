import drawFractal from './drawFractal'
import drawFrameCounter from './drawFrameCounter'

const drawCanvas = (objStore, reduxStore) => {
  drawFractal(objStore, reduxStore)
  drawFrameCounter(objStore, reduxStore)
}

export default drawCanvas
