import * as setup from '../../setup/setupReduxState'

// Single item
const uiItemReducerCreator = uiType => (state = {}, action) => {
  switch (action.type) {
    case uiType:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}

// Array of items
const uiItemsReducerCreator = (uiType, initFn) => (state = initFn(), action) => {
  const itemReducer = uiItemReducerCreator(uiType)
  switch (action.type) {
    case uiType:
      return state.map(itemState =>
        (itemState.id === action.id) ? itemReducer(itemState, action) : itemState
      )
    default:
      return state
  }
}

export const BUTTON_PRESS = 'BUTTON_PRESS'
export const SET_PICKLIST = 'SET_PICKLIST'
export const SLIDER_MOVE = 'SLIDER_MOVE'

export const buttonsReducer = uiItemsReducerCreator(BUTTON_PRESS, setup.getInitialButtonsState)
export const picklistsReducer = uiItemsReducerCreator(SET_PICKLIST, setup.getInitialPicklistsState)
export const slidersReducer = uiItemsReducerCreator(SLIDER_MOVE, setup.getInitialSlidersState)
