import { verbosity } from '../_params'
import { fractalUpdate } from '../graphics/fractalUpdates'

let nextActionId = 0
export const getActionObject = (type, payload) => ({
  actionId: nextActionId++,
  type,
  payload
})

export const getThunk = (type, payload) => (reduxDispatch, getReduxState, objStore) => {
  const action = getActionObject(type, payload)
  if (2 <= verbosity) console.log(action)
  reduxDispatch(action)
  fractalUpdate(action, getReduxState, objStore)
}
