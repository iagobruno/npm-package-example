export default function snakeCase(txt: string): string {
  const transformed = txt
    // "GET_NAME" -> "get_name"
    .replace(/(?:_+)?([A-Z]+)/g, function (_, letter: string, at: number) {
      return (at > 0 ? '_' : '') + letter
    })
    // "get_name" -> "get_name"
    .replace(/(?:\s|-|_|\.|\/)/g, '_')
    // "v 9.0" -> "v_9_0"
    .replace(/(?:\.|\s)([0-9])/g, function (_, numb: string) {
      return '_' + numb
    })
  return transformed.toLowerCase()
}
