import { BUTTON_PRESS } from '../actions/actionTypes'

const button = (state = {}, action) => {
  switch (action.type) {
    case BUTTON_PRESS:
      return {
        ...state,
        isActive: !state.isActive
      }
    default:
      return state
  }
}

export default button
