export const frameRateArray = [0, 1, 2, 4, 8, 16, 25, 30, 50, 60]
export const MAP_FRAME_RATES = 'MAP_FRAME_RATES'
export const MAP_EXP_2 = 'MAP_EXP_2'
export const MAP_EXP_2_ROUND = 'MAP_EXP_2_ROUND'

export const numericMap = (val, mapType) => {
  // If mapType is null or not recognised,
  // this maps a number to itself (identity function)
  switch (mapType) {
    case MAP_FRAME_RATES:
      return frameRateArray[val]
    case MAP_EXP_2:
      return 2 ** val
    case MAP_EXP_2_ROUND:
      return Math.round(2 ** val)
    default:
      return 1 * val
  }
}
