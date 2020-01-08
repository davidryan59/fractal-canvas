import * as map from '../mappings'

it('numericMap using MAP_EXP_2: 2 ^ 3 = 8', () => {
  expect(map.numericMap(3, map.MAP_EXP_2)).toEqual(8)
})
