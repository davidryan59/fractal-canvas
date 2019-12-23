import * as ui from '../constants/uiNames'

export const getInitialWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})

export const getInitialButtonsState = () => []

export const getInitialPicklistsState = () => []

export const getInitialSlidersState = () => [
  {
    id: ui.SLIDER_MAX_ITERATIONS,
    type: ui.TYPE_SLIDER,
    label: 'Max Iterations',
    min: '0',
    step: '1',
    max: '5',
    value: '3',
    len: 2
  },
  {
    id: ui.SLIDER_ANGLE_1,
    type: ui.TYPE_SLIDER,
    label: 'Angle 1',
    min: '-180',
    step: '1',
    max: '180',
    value: '24',
    len: 4
  },
  {
    id: ui.SLIDER_ANGLE_2,
    type: ui.TYPE_SLIDER,
    label: 'Angle 2',
    min: '-180',
    step: '1',
    max: '180',
    value: '-37',
    len: 4
  },
]
