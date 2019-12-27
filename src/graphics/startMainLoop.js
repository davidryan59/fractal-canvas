import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'
import drawCanvas from './drawCanvas'

const startMainLoop = (objStore, getReduxState) => {
  // Setup loop
  let prevTime = 0
  const mainLoop = timeLoopStart => {
    // General items


    window.requestAnimationFrame(mainLoop)


    const reduxState = getReduxState()
    // Canvas animation items
    const rateHz = getSliderDisplayValue(reduxState, ui.SLIDER_ANIMATION_RATE)
    const timeDiff = timeLoopStart - prevTime
    if (0 < rateHz && 1000 / rateHz < timeDiff) {
      drawCanvas(objStore, getReduxState)
      prevTime = timeLoopStart
    }
  }
  // Start loop
  mainLoop()
}

export default startMainLoop
