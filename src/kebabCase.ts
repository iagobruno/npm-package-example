export default function kebabCase(txt: string): string {
  const transformed = txt
    // "GET_NAME" -> "get-name"
    .replace(/(?:_+)?([A-Z]+)/g, function(_, letter: string, at: number) {
      return (at > 0 ? '-' : '') + letter
    })
    // "get_name" -> "get-name"
    .replace(/(?:\s|_|\.|\/)/g, '-')
    // "v 9.0" -> "v-9-0"
    .replace(/(?:\.|\s)([0-9])/g, function(_, numb: string) {
      return '-' + numb
    })
  return transformed.toLowerCase()
}
