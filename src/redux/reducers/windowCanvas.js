import { getCanvasWidthFromWindowWidth } from '../../_params'
import { getInitialCanvasState, getInitialWindowState } from '../../setup/setupReduxState'

export const WINDOW_RESIZE = 'WINDOW_RESIZE'

export const canvasReducer = (state = getInitialCanvasState(), action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        width: getCanvasWidthFromWindowWidth( action.payload.width ),
        height: state.height
      }
    default:
      return state
  }
}

export const windowReducer = (state = getInitialWindowState(), action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        width: action.payload.width,
        height: action.payload.height
      }
    default:
      return state
  }
}
