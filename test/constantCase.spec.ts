import constantCase from '../src/constantCase'

const TEST_CASES = [
  ['get name', 'GET_NAME'],
  ['get-name', 'GET_NAME'],
  ['get_name', 'GET_NAME'],
  ['get.name', 'GET_NAME'],
  ['get/name', 'GET_NAME'],
  ['GetName', 'GET_NAME'],
  ['GET_NAME', 'GET_NAME'],
  ['version 10.2.34', 'VERSION_10_2_34'],
]

TEST_CASES.forEach(([input, result]) => {
  test(`should "${input}" to be transformed in "${result}"`, () => {
    expect(constantCase(input)).toBe(result)
  })
})
