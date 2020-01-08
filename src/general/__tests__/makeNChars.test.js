import makeNChars from '../makeNChars'

it('can reduce string length to 2', () => {
  expect(makeNChars('Test', 2)).toEqual('Te')
})
