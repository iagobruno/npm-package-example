import camelCase from '../src/camelCase'

const TEST_CASES = [
  ['get name', 'getName'],
  ['get-name', 'getName'],
  ['get_name', 'getName'],
  ['get.name', 'getName'],
  ['get/name', 'getName'],
  ['GetName', 'getName'],
  ['GET_NAME', 'getName'],
  ['version 10.2.34', 'version_10_2_34']
]

TEST_CASES.forEach(([input, result]) => {
  test(`should "${input}" to be transformed in "${result}"`, () => {
    expect(camelCase(input)).toBe(result)
  })
})
