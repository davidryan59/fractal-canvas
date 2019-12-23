import * as map from '../general/mappings'
import * as ui from '../constants/uiNames'

export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})

export const getInitialButtonsState = () => []

export const getInitialPicklistsState = () => []

export const getInitialSlidersState = () => [
  {
    id: ui.SLIDER_ANIMATION_RATE,
    type: ui.TYPE_SLIDER,
    label: 'Animation Rate',
    min: '0',
    step: '1',
    max: '9',
    value: '5',
    len: 2,
    displayFn: map.MAP_FRAME_RATES,
    unit: 'Hz',
  },
  {
    id: ui.SLIDER_MAX_ITERATIONS,
    type: ui.TYPE_SLIDER,
    label: 'Max Iterations',
    min: '0',
    step: '1',
    max: '16',
    value: '8',
    len: 2
  },
  {
    id: ui.SLIDER_SCALE_START,
    type: ui.TYPE_SLIDER,
    label: 'Size',
    min: '0',
    step: '10',
    max: '990',
    value: '80',
    len: 3,
    unit: 'px'
  },
  {
    id: ui.SLIDER_ANGLE_START,
    type: ui.TYPE_SLIDER,
    label: 'Angle',
    min: '-180',
    step: '1',
    max: '180',
    value: '8',
    len: 4
  },
  {
    id: ui.SLIDER_SCALE_1_1,
    type: ui.TYPE_SLIDER,
    label: 'Scale',
    min: '0.01',
    step: '0.01',
    max: '0.99',
    value: '0.85',
    len: 4
  },
  {
    id: ui.SLIDER_ANGLE_1_1,
    type: ui.TYPE_SLIDER,
    label: 'Angle',
    min: '-180',
    step: '1',
    max: '180',
    value: '20',
    len: 4
  },
  {
    id: ui.SLIDER_SCALE_1_2,
    type: ui.TYPE_SLIDER,
    label: 'Scale',
    min: '0.01',
    step: '0.01',
    max: '0.99',
    value: '0.8',
    len: 4
  },
  {
    id: ui.SLIDER_ANGLE_1_2,
    type: ui.TYPE_SLIDER,
    label: 'Angle',
    min: '-180',
    step: '1',
    max: '180',
    value: '-37',
    len: 4
  },

]
