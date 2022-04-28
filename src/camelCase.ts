export default function camelCase(txt: string): string {
  const transformed = txt
    // "GET_NAME" -> "GetName"
    .replace(/(?:_+)?([A-Z]+)/g, function(_, word: string) {
      return word.charAt(0) + word.slice(1).toLowerCase()
    })
    // "get name" -> "getName"
    .replace(/(?:\s|-|_|\.|\/)([A-Za-z])/g, (_, letter: string) => {
      return letter.toUpperCase()
    })
    // "v 9.0" -> "v_9_0"
    .replace(/(?:\.|\s)([0-9])/g, function(_, numb: string) {
      return '_' + numb
    })
  return transformed.charAt(0).toLowerCase() + transformed.slice(1)
}
