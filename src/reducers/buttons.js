import { getInitialButtonsState } from '../setup/setupReduxState'
import { BUTTON_PRESS } from '../constants/actionTypes'

import button from './button'

const buttons = (state = getInitialButtonsState(), action) => {
  switch (action.type) {
    case BUTTON_PRESS:
      return state.map(buttonState =>
        (buttonState.id === action.id) ? button(buttonState, action) : buttonState
      )
    default:
      return state
  }
}

export default buttons
