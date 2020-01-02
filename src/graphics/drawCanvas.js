import { buttonActive } from '../getters/button'
import * as ui from '../general/uiNames'
import clearCanvas from './clearCanvas'
import drawFractal from './drawFractal'
import drawStats from './drawStats'

const drawCanvas = (objStore, getReduxState) => {
  const reduxState = getReduxState()
  objStore.stats.framesDrawn++
  clearCanvas(objStore, getReduxState)
  drawFractal(objStore, getReduxState)
  if (buttonActive(reduxState, ui.TOGGLE_DISPLAY_STATS)) drawStats(objStore, getReduxState)
}

export default drawCanvas
