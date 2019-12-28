import { fractalUpdate } from '../graphics/fractalUpdates'

let nextActionId = 0
export const getActionObject = (type, data) => ({
  type,
  actionId: nextActionId++,
  ...data
})

let nextThunkId = 0
export const getThunk = (type, data) => (dispatch, getState, objStore) => {
  const theData = { thunkId: nextThunkId++, ...data }
  const theAction = getActionObject(type, theData)
  console.log(theAction)
  dispatch(theAction)
  fractalUpdate(theAction, getState, objStore)
}
