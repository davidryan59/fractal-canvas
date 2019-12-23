export const frameRateArray = [0, 1, 2, 4, 8, 16, 25, 30, 50, 60]
export const MAP_FRAME_RATES = 'MAP_FRAME_RATES'

export const numericMap = (val, mapType) => {
  // If mapType is null or not recognised,
  // this maps a number to itself (identity function)
  switch (mapType) {
    case MAP_FRAME_RATES:
      return frameRateArray[val]
    default:
      return 1 * val
  }
}
