// Local storage
export const localStorageKey = 'fractal-canvas'

// Control whether to console.log the developer info
// export const verbosity = 0  // log nothing
export const verbosity = 1  // log main things
// export const verbosity = 2  // log more details

// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeMinDiff = 30

// Canvas control
export const initialCanvasHeight = 480
export const getCanvasWidthFromWindowWidth = width => Math.round( width - windowSizeChangeMinDiff - 40 )

// Define default convex hulls
// For drawing, ought to have a rectangle
export const defaultHullDrawing = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
]
// For iteration, only need to start with a single point
export const defaultHullIteration = [
  [0, 0],
]

// Don't check performance/timing every loop, skip this number of loops
export const loopsBetweenTimingChecks = 10

// Update stats periodically, not more frequently than this
export const statUpdatePeriodMs = 250

// If draw time has used more than this proportion of time, start to warn user
// typically by fading out the fractal
export const drawWarnRatio = 0.9

// Maths
export const degreesToRadians = Math.PI / 180
export const cos = Math.cos
export const sin = Math.sin
