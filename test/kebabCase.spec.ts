import kebabCase from '../src/kebabCase'

const TEST_CASES = [
  ['get name', 'get-name'],
  ['get-name', 'get-name'],
  ['get_name', 'get-name'],
  ['get.name', 'get-name'],
  ['get/name', 'get-name'],
  ['GetName', 'get-name'],
  ['GET_NAME', 'get-name'],
  ['version 10.2.34', 'version-10-2-34']
]

TEST_CASES.forEach(([input, result]) => {
  test(`should "${input}" to be transformed in "${result}"`, () => {
    expect(kebabCase(input)).toBe(result)
  })
})
