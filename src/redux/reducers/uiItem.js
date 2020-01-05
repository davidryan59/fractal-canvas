import * as init from '../initialise'

// Single item
const uiItemReducerCreator = uiType => (state = {}, action) => {
  switch (action.type) {
    case uiType:
      return {
        ...state,
        value: action.payload.value
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
        (itemState.id === action.payload.id) ? itemReducer(itemState, action) : itemState
      )
    default:
      return state
  }
}

export const BUTTON_PRESS = 'BUTTON_PRESS'
export const SET_PICKLIST = 'SET_PICKLIST'
export const SLIDER_MOVE = 'SLIDER_MOVE'

export const buttonsReducer = uiItemsReducerCreator(BUTTON_PRESS, init.getInitialButtonsState)
export const picklistsReducer = uiItemsReducerCreator(SET_PICKLIST, init.getInitialPicklistsState)
export const slidersReducer = uiItemsReducerCreator(SLIDER_MOVE, init.getInitialSlidersState)
