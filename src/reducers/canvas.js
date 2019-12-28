import { getCanvasWidthFromWindowWidth } from '../constants/general'
import { getInitialCanvasState } from '../setup/setupReduxState'
import { WINDOW_RESIZE } from '../constants/actionTypes'


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
