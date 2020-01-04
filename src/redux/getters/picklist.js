export const getPicklistByName = (state, picklistId) => {
  try {
    return state.picklists.find(picklist => picklist.id === picklistId)
  } catch (e) {
    console.log(`Picklist ${picklistId} could not be found.`)
    return null
  }
}

export const getPicklistValue = (state, picklistId) => {
  const picklist = getPicklistByName(state, picklistId)
  return (picklist) ? picklist.value : ''
}
