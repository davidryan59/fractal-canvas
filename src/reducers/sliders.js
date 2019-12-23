import { getInitialSlidersState } from '../setup/setupReduxState'
import { SLIDER_MOVE } from '../constants/actionTypes'

import slider from './slider'

const sliders = (state = getInitialSlidersState(), action) => {
  switch (action.type) {
    case SLIDER_MOVE:
      return state.map(sliderState =>
        (sliderState.id === action.id) ? slider(sliderState, action) : sliderState
      )
    default:
      return state
  }
}

export default sliders
