// Minimum number of pixels change in window size (vertically or horizontally)
// that causes a window change size action to be dispatched
export const windowSizeChangeMinDiff = 30

// Canvas control
export const initialCanvasHeight = 480
export const getCanvasWidthFromWindowWidth = width => Math.round( width - windowSizeChangeMinDiff - 40 )

// Don't check performance/timing every loop, skip this number of loops
export const loopsBetweenTimingChecks = 10

// If draw time has used more than this proportion of time, start to warn user
// typically by fading out the fractal
export const drawWarnRatio = 0.9

// Maths
export const degreesToRadians = Math.PI / 180
export const cos = Math.cos
export const sin = Math.sin
