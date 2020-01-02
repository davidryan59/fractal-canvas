import * as ui from '../constants/uiNames'
import { verbosity } from '../constants/general'
import { buttonActive } from '../getters/button'
import { getSliderDisplayValue } from '../getters/slider'
import drawCanvas from './drawCanvas'

const startMainLoop = (objStore, getReduxState) => {
  // Setup loop
  let prevTime = 0
  const mainLoop = timeLoopStart => {
    // General items
    const reduxState = getReduxState()
    if (buttonActive(reduxState, ui.TOGGLE_ANIMATE)) window.requestAnimationFrame(mainLoop)
    // Canvas animation items
    const rateHz = getSliderDisplayValue(reduxState, ui.SLIDER_ANIMATION_RATE)
    const timeDiff = timeLoopStart - prevTime
    if (0 < rateHz && 1000 / rateHz < timeDiff) {
      prevTime = timeLoopStart
      drawCanvas(objStore, getReduxState)
    }
  }
  // Start loop
  if (verbosity) console.log(`Starting main loop`)
  mainLoop()
}

export default startMainLoop
