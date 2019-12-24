import * as ui from '../constants/uiNames'
import { getSliderDisplayValue } from '../getters/slider'

const setupCanvas = (objStore, getReduxState) => {
  // Get canvas element and context
  const canvasElt = document.getElementById('main-canvas')
  const ctx = canvasElt.getContext('2d')
  // Reset size of canvas
  const reduxState = getReduxState()
  canvasElt.width = getSliderDisplayValue(reduxState, ui.SLIDER_CANVAS_X)
  canvasElt.height = getSliderDisplayValue(reduxState, ui.SLIDER_CANVAS_Y)
  // Store references
  objStore.canvas = {}
  objStore.canvas.ctx = ctx
  objStore.canvas.elt = canvasElt
}

export default setupCanvas
