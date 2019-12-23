import { BUTTON_PRESS } from '../constants/actionTypes'

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
