import { getThunk } from '../redux/actions'
import { windowSizeChangeMinDiff, verbosity } from '../_params'
import { WINDOW_RESIZE } from '../redux/reducers/windowCanvas'
import { saveReduxStateToLocalFile } from '../redux/fileHandling'

export const windowResizeHandler = (event, objStore, reduxStore) => {
  // Only fire action if window size has changed by minimum amount
  const reduxState = reduxStore.getState()
  const oldWidth = reduxState.window.width
  const oldHeight = reduxState.window.height
  const newWidth = event.target.innerWidth
  const newHeight = event.target.innerHeight
  const diffWidth = Math.abs(newWidth - oldWidth)
  const diffHeight = Math.abs(newHeight - oldHeight)
  const windowSizeChangeDiff = Math.max(diffWidth, diffHeight)
  if (windowSizeChangeMinDiff <= windowSizeChangeDiff) { reduxStore.dispatch(getThunk(WINDOW_RESIZE, { width: newWidth, height: newHeight })) }
}

export const keyUpHandler = (event, objStore, reduxStore) => {
  const keyCode = event.code
  if (verbosity) console.log(`Key up: ${keyCode}`)
  if (keyCode === 'KeyS') saveReduxStateToLocalFile(reduxStore)
  // other keyUp actions here
}

export const keyDownHandler = (event, objStore, reduxStore) => {
  const keyCode = event.code
  if (verbosity >= 2) console.log(`Key down: ${keyCode}`)
  // keydown actions here...
  // ...currently no keydown actions defined
  // Keydowns fire multiple times if key held down.
  // Keyups only fire once on lifting key
  // so keyups are more useful
}
