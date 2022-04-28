import pascalCase from './pascalCase'

export default function capitalCase(txt: string): string {
  return pascalCase(txt).replace(
    /([A-Z]+)/g,
    function (_, parche: string, at: number) {
      return (at > 0 ? ' ' : '') + parche
    }
  )
}
