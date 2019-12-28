import { getThunk } from '../actions'
import * as gen from '../constants/general'
import { WINDOW_RESIZE } from '../constants/actionTypes'


export const windowResizeHandler = (event, reduxStore) => {
  // Only fire action if window size has changed by minimum amount
  const reduxState = reduxStore.getState()
  const oldWidth = reduxState.window.width
  const oldHeight = reduxState.window.height
  const newWidth = event.target.innerWidth
  const newHeight = event.target.innerHeight
  const diffWidth = Math.abs(newWidth - oldWidth)
  const diffHeight = Math.abs(newHeight - oldHeight)
  const windowSizeChangeDiff = Math.max(diffWidth, diffHeight)
  if (gen.windowSizeChangeMinDiff <= windowSizeChangeDiff)
    reduxStore.dispatch(getThunk(WINDOW_RESIZE, {width:newWidth, height:newHeight}))
}
