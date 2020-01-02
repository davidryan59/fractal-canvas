import { getCanvasWidthFromWindowWidth } from '../_params'
import { getInitialCanvasState } from '../setup/setupReduxState'
import { WINDOW_RESIZE } from '../actions/actionTypes'


const canvas = (state = getInitialCanvasState(), action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        width: getCanvasWidthFromWindowWidth( action.width ),
        height: state.height
      }
    default:
      return state
  }
}

export default canvas
