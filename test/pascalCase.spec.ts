import pascalCase from '../src/pascalCase'

const TEST_CASES = [
  ['get name', 'GetName'],
  ['get-name', 'GetName'],
  ['get_name', 'GetName'],
  ['get.name', 'GetName'],
  ['get/name', 'GetName'],
  ['GetName', 'GetName'],
  ['GET_NAME', 'GetName'],
  ['version 10.2.34', 'Version_10_2_34']
]

TEST_CASES.forEach(([input, result]) => {
  test(`should "${input}" to be transformed in "${result}"`, () => {
    expect(pascalCase(input)).toBe(result)
  })
})
