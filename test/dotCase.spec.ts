import dotCase from '../src/dotCase'

const TEST_CASES = [
  ['get name', 'get.name'],
  ['get-Name', 'get.Name'],
  ['get_name', 'get.name'],
  ['get.name', 'get.name'],
  ['get/name', 'get.name'],
  ['GetName', 'Get.Name'],
  ['Get Name', 'Get.Name'],
  ['GET_NAME', 'GET.NAME'],
  ['version 10-2-34', 'version.10.2.34'],
  ['Version 10.2.34', 'Version.10.2.34'],
]

TEST_CASES.forEach(([input, result]) => {
  test(`should "${input}" to be transformed in "${result}"`, () => {
    expect(dotCase(input)).toBe(result)
  })
})
