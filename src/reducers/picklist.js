import { SET_PICKLIST } from '../constants/actionTypes'

const picklist = (state = {}, action) => {
  switch (action.type) {
    case SET_PICKLIST:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}

export default picklist
