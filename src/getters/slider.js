import { numericMap } from '../general/mappings'

export const getSliderByName = (state, sliderId) => {
  try {
    return state.sliders.find(slider => slider.id === sliderId)
  } catch (e) {
    console.log(`Slider ${sliderId} could not be found.`)
    return null
  }
}

export const getSliderInternalValue = (state, sliderId) => {
  const slider = getSliderByName(state, sliderId)
  return (slider) ? slider.value : 0
}

export const getSliderDisplayValue = (state, sliderId) => {
  const slider = getSliderByName(state, sliderId)
  return (slider) ? numericMap(slider.value, slider.displayFn) : 0
}
