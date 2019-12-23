export const MAP_NEGATE = 'MAP_NEGATE'
export const MAP_EXP_2 = 'MAP_EXP_2'
export const MAP_EXP2_ROUNDED = 'MAP_EXP2_ROUNDED'
export const MAP_EXP_10 = 'MAP_EXP_10'
export const MAP_DB_TO_GAIN = 'MAP_DB_TO_GAIN'

export const numericMap = (val, mapType) => {
  // If mapType is null or not recognised,
  // this maps a number to itself (identity function)
  switch (mapType) {
    case MAP_NEGATE:
      return -val
    case MAP_EXP_2:
      return 2 ** val
    case MAP_EXP2_ROUNDED:
      return Math.round(2 ** val)
    case MAP_EXP_10:
      return 10 ** val
    case MAP_DB_TO_GAIN:
      return 10 ** (val / 20)
    default:
      return val
  }
}
