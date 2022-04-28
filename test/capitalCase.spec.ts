import capitalCase from '../src/capitalCase'

const TEST_CASES = [
  ['get name', 'Get Name'],
  ['get-name', 'Get Name'],
  ['get_name', 'Get Name'],
  ['get.name', 'Get Name'],
  ['get/name', 'Get Name'],
  ['GetName', 'Get Name'],
  ['Get Name', 'Get Name'],
  ['GET_NAME', 'Get Name'],
  ['version 10.2.34', 'Version_10_2_34'],
]

TEST_CASES.forEach(([input, result]) => {
  test(`should "${input}" to be transformed in "${result}"`, () => {
    expect(capitalCase(input)).toBe(result)
  })
})
