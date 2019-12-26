export const getButtonByName = (state, buttonId) => {
  try {
    return state.buttons.find(button => button.id === buttonId)
  } catch (e) {
    console.log(`Button ${buttonId} could not be found.`)
    return null
  }
}

export const buttonActive = (state, buttonId) => {
  const button = getButtonByName(state, buttonId)
  return (button) ? !!button.isActive : false
}
