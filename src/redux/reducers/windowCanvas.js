import { getCanvasWidthFromWindowWidth } from '../../_params'
import * as init from '../initialise'

export const WINDOW_RESIZE = 'WINDOW_RESIZE'

export const canvasReducer = (state = init.getInitialCanvasState(), action) => {
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

export const windowReducer = (state = init.getInitialWindowState(), action) => {
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
