// import * as cts from '../constants'

let nextActionId = 0
export const getActionObject = (type, data) => ({
  type,
  actionId: nextActionId++,
  ...data
})

export const getThunk = (type, data) => (dispatch, getState, objStore) => {
  console.log(data)
  dispatch(getActionObject(type, data))
  // if (data.id === cts.SOME_CONSTANT) {
  //   // Do another thing
  // }
}
