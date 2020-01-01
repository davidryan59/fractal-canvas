import { verbosity } from '../constants/general'
import { fractalUpdate } from '../graphics/fractalUpdates'

let nextActionId = 0
export const getActionObject = (type, data) => ({
  type,
  actionId: nextActionId++,
  ...data
})

export const getThunk = (type, data) => (reduxDispatch, getReduxState, objStore) => {
  const theAction = getActionObject(type, data)
  if (2 <= verbosity) console.log(theAction)
  reduxDispatch(theAction)
  fractalUpdate(theAction, getReduxState, objStore)
}
