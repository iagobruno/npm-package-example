export function transform(input: string, { char } = { char: '' }): string {
  return input
    .replace(/(?:_+)?([A-Z]+)/g, function (_, parche: string, at: number) {
      return (at > 0 ? char : '') + parche
    })
    .replace(/(?:\s|_|-|\.|\/)/g, char)
    .replace(/(?:\s|_|-|\.|\/)([0-9])/g, function (_, parche: string) {
      return char + parche
    })
    .replace(/(\s|_|-|\.|\/){2,}/g, '$1')
}
