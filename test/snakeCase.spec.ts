import snakeCase from '../src/snakeCase'

const TEST_CASES = [
  ['get name', 'get_name'],
  ['get-name', 'get_name'],
  ['get_name', 'get_name'],
  ['get.name', 'get_name'],
  ['get/name', 'get_name'],
  ['GetName', 'get_name'],
  ['GET_NAME', 'get_name'],
  ['version 10.2.34', 'version_10_2_34'],
]

TEST_CASES.forEach(([input, result]) => {
  test(`should "${input}" to be transformed in "${result}"`, () => {
    expect(snakeCase(input)).toBe(result)
  })
})
