import { getInitialPicklistsState } from '../setup/setupReduxState'
import { SET_PICKLIST } from '../constants/actionTypes'

import picklist from './picklist'

const picklists = (state = getInitialPicklistsState(), action) => {
  switch (action.type) {
    case SET_PICKLIST:
      return state.map(picklistState =>
        (picklistState.id === action.id) ? picklist(picklistState, action) : picklistState
      )
    default:
      return state
  }
}

export default picklists
